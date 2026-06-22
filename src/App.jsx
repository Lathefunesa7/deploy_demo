import React, { useState } from "react";
import "./App.css";

function App() {
  const [expenseName, setExpenseName] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const addExpense = () => {
    if (expenseName === "" || amount === "") {
      alert("Please fill all fields");
      return;
    }

    const newExpense = {
      id: Date.now(),
      name: expenseName,
      amount: Number(amount),
    };

    setExpenses([...expenses, newExpense]);
    setExpenseName("");
    setAmount("");
  };

  const deleteExpense = (id) => {
    const updatedExpenses = expenses.filter(
      (expense) => expense.id !== id
    );
    setExpenses(updatedExpenses);
  };

  const totalExpense = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  return (
    <div className="container">
      <h1>Expense Tracker</h1>

      <input
        type="text"
        placeholder="Expense Name"
        value={expenseName}
        onChange={(e) => setExpenseName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addExpense}>
        Add Expense
      </button>

      <h2>Total: ₹{totalExpense}</h2>

      {expenses.length === 0 ? (
        <p>No Expenses Added</p>
      ) : (
        <ul>
          {expenses.map((expense) => (
            <li key={expense.id}>
              {expense.name} - ₹{expense.amount}

              <button
                onClick={() =>
                  deleteExpense(expense.id)
                }
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
