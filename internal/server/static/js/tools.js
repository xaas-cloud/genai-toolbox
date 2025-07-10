import { renderToolInterface } from "./toolDisplay.js";

document.addEventListener('DOMContentLoaded', () => {
    const toolDisplayArea = document.getElementById('tool-display-area');
    const secondaryPanelContent = document.getElementById('secondary-panel-content');

    if (!secondaryPanelContent || !toolDisplayArea) {
        console.error('Required DOM elements not found.');
        return;
    }

    /**
     * Fetches the list of tools from the API and renders them in the secondary panel.
     */
    async function loadTools() {
        secondaryPanelContent.innerHTML = '<p>Fetching tools...</p>';
        try {
            // This endpoint should list tools, the structure you provided seems to be for a single tool
            const response = await fetch('/api/toolset');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const apiResponse = await response.json();
            renderToolList(apiResponse);
        } catch (error) {
            console.error('Failed to load tools:', error);
            secondaryPanelContent.innerHTML = '<p class="error">Failed to load tools. Please try again later.</p>';
        }
    }

    /**
     * Renders the list of tools in the secondary navigation panel.
     * @param {object} apiResponse - The parsed JSON response from the API.
     */
    function renderToolList(apiResponse) {
        secondaryPanelContent.innerHTML = '';

        if (!apiResponse || typeof apiResponse.tools !== 'object' || apiResponse.tools === null) {
            console.error('Error: Expected an object with a "tools" property, but received:', apiResponse);
            secondaryPanelContent.textContent = 'Error: Invalid response format from toolset API.';
            return;
        }

        const toolsObject = apiResponse.tools;
        const toolNames = Object.keys(toolsObject);

        if (toolNames.length === 0) {
            secondaryPanelContent.textContent = 'No tools found.';
            return;
        }

        const ul = document.createElement('ul');
        toolNames.forEach(toolName => {
            const li = document.createElement('li');
            const button = document.createElement('button');
            button.textContent = toolName;
            button.dataset.toolname = toolName;
            button.classList.add('tool-button');
            button.addEventListener('click', handleToolClick);
            li.appendChild(button);
            ul.appendChild(li);
        });
        secondaryPanelContent.appendChild(ul);
    }

    /**
     * Handles the click event on a tool button in the secondary panel.
     * @param {MouseEvent} event - The click event.
     */
    function handleToolClick(event) {
        const toolName = event.target.dataset.toolname;
        if (toolName) {
            const currentActive = secondaryPanelContent.querySelector('.tool-button.active');
            if (currentActive) {
                currentActive.classList.remove('active');
            }
            event.target.classList.add('active');
            fetchToolDetails(toolName);
        }
    }

    /**
     * Fetches details for a specific tool from the API and renders the UI.
     * @param {string} toolName - The name of the tool.
     */
    async function fetchToolDetails(toolName) {
        toolDisplayArea.innerHTML = '<p>Loading tool details...</p>';

        try {
            const response = await fetch(`/api/tool/${encodeURIComponent(toolName)}`);
            if (!response.ok) {
                 throw new Error(`HTTP error! status: ${response.status}`);
            }
            const apiResponse = await response.json();

            if (!apiResponse.tools || !apiResponse.tools[toolName]) {
                throw new Error(`Tool "${toolName}" data not found in API response.`);
            }
            const toolObject = apiResponse.tools[toolName];

            const toolInterfaceData = {
                id: toolName,
                name: toolName,
                description: toolObject.description || "No description provided.",
                parameters: (toolObject.parameters || []).map(param => {
                    let inputType = 'text'; // Default HTML input type
                    let options;
                    const apiType = param.type ? param.type.toLowerCase() : 'string';
                    let valueType = 'string'; // Data type for API payload
                    let label = param.description || param.name;

                    if (apiType === 'integer' || apiType === 'number') {
                        inputType = 'number';
                        valueType = 'number';
                    } else if (apiType === 'boolean') {
                        inputType = 'select';
                        options = ['true', 'false'];
                        valueType = 'boolean';
                    } else if (apiType === 'array') {
                        inputType = 'textarea'; // Use textarea for array inputs
                        const itemType = param.items && param.items.type ? param.items.type.toLowerCase() : 'string';
                        valueType = `array<${itemType}>`;
                        label += ' (JSON Array string)'; // Hint to the user
                    } else if (param.enum && Array.isArray(param.enum)) {
                        inputType = 'select';
                        options = param.enum;
                        valueType = 'string';
                    }
                    console.log(param.name, inputType, label, apiType, valueType)

                    return {
                        name: param.name,
                        type: inputType,    // For HTML input element type
                        valueType: valueType, // For API request payload type
                        label: label,
                        required: param.required || false,
                        options: options,
                        defaultValue: param.default,
                    };
                })
            };

            console.log("Transformed toolInterfaceData:", toolInterfaceData);

            renderToolInterface(toolInterfaceData, toolDisplayArea);

        } catch (error) {
            console.error(`Failed to load details for tool "${toolName}":`, error);
            toolDisplayArea.innerHTML = `<p class="error">Failed to load details for ${toolName}. ${error.message}</p>`;
        }
    }


    // Initial load of tools list
    loadTools();
});
