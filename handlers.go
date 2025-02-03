package main

import (
	"encoding/json"
	"net/http"
)

// GetExpenses returns the list of expenses.
func GetExpenses(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(expenses)
}

// CreateExpense adds a new expense to the list.
func CreateExpense(w http.ResponseWriter, r *http.Request) {
	var exp Expense
	if err := json.NewDecoder(r.Body).Decode(&exp); err != nil {
		http.Error(w, "Invalid input", http.StatusBadRequest)
		return
	}
	exp.ID = len(expenses) + 1
	expenses = append(expenses, exp)
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(exp)
}
