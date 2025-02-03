package main

import (
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

func main() {
	// Initialize an empty slice for expenses
	InitExpenses()

	// Create a new router
	router := mux.NewRouter()

	// API routes for expenses
	router.HandleFunc("/api/expenses", GetExpenses).Methods("GET")
	router.HandleFunc("/api/expenses", CreateExpense).Methods("POST")

	// Start the server on port 8080
	log.Println("Server running on port 8080")
	log.Fatal(http.ListenAndServe(":8080", router))
}
