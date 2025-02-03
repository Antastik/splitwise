package main

// Expense defines a simple expense structure.
type Expense struct {
	ID          int     `json:"id"`
	Description string  `json:"description"`
	Amount      float64 `json:"amount"`
}

var expenses []Expense

// InitExpenses initializes the expense list.
func InitExpenses() {
	expenses = []Expense{}
}
