import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  // Fetch expenses from backend (adjust the URL if needed)
  useEffect(() => {
    fetch('/api/expenses')
      .then(res => res.json())
      .then(data => setExpenses(data))
      .catch(err => console.error("Error fetching expenses:", err));
  }, []);

  const addExpense = () => {
    fetch('/api/expenses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ description, amount: parseFloat(amount) })
    })
      .then(res => res.json())
      .then(expense => {
        setExpenses([...expenses, expense]);
        setDescription('');
        setAmount('');
      })
      .catch(err => console.error("Error adding expense:", err));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Neo-Cyberpunk Splitwise</h1>
      </header>
      <div className="Expense-form">
        <input 
          type="text" 
          placeholder="Expense description" 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input 
          type="number" 
          placeholder="Amount" 
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={addExpense}>Add Expense</button>
      </div>
      <div className="Expenses">
        {expenses.map(exp => (
          <div key={exp.id} className="Expense">
            <span>{exp.description}</span>
            <span>${exp.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
