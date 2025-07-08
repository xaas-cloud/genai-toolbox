package server

import (
	"embed"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

//go:embed all:static
var embedFS embed.FS

// webRouter creates a router that represents the routes under /web
func webRouter() (chi.Router, error) {
	r := chi.NewRouter()
	r.Use(middleware.StripSlashes)

	r.Get("/", func(w http.ResponseWriter, r *http.Request) { serveHTML(w, "static/index.html") })

	return r, nil
}

func serveHTML(w http.ResponseWriter, filepath string) {
	htmlContent, err := embedFS.ReadFile(filepath)
	if err != nil {
		http.Error(w, "Internal Server Error: Could not load page.", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	_, _ = w.Write(htmlContent)
}
