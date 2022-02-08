package main

import (
	"fmt"
	"html"
	"net/http"
)

func Hello(str string) {
	fmt.Println(str)
}

func main() {
	http.HandleFunc("/api", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Hello, %q", html.EscapeString(r.URL.Path))
	})
	http.ListenAndServe(":3333", nil)
}
