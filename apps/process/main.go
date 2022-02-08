package main

import (
	"context"
	"fmt"
	"html"
	"net/http"

	dapr "github.com/dapr/go-sdk/client"
)

func Hello(str string) {
	client, err := dapr.NewClient()
	if err != nil {

	}
	defer client.Close()
	ctx := context.Background()
	result, err := client.GetState(ctx, "statestore", "orderid")
	if err != nil {

	}
	if result != nil {
		fmt.Println(result)
	} else {
		fmt.Println(str)
	}
}

func main() {
	http.HandleFunc("/api", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Hello, %q", html.EscapeString(r.URL.Path))
	})
	http.ListenAndServe(":3333", nil)
}
