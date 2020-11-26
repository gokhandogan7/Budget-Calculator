import "./App.css";
import React, { useState, useEffect } from "react";
import { ExpenseList } from "./components/ExpenseList";
import { ExpenseForm } from "./components/ExpenseForm";
import { Alert } from "./components/Alert";
import { v4 as uuidv4 } from "uuid";

const initialExpenses = [
  { id: uuidv4(), charge: "rent", amount: 1700 },
  { id: uuidv4(), charge: "car payment", amount: 1700 },
  { id: uuidv4(), charge: "credit card bill", amount: 1000 },
];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [charge, setCharge] = useState('')
  const [amount, setAmount] = useState('')
  const handleCharge = e => {setCharge(e.target.value)
  console.log(e.target.value)
  }
  

  return (
    <>
      <Alert></Alert>
      <h1>Budget Calculator</h1>
      <main className="App">
      <input value={charge} onChange={handleCharge} />
        <ExpenseForm />
        <ExpenseList expenses={expenses} />
      </main>
      <h1>
        total spending:{" "}
        <span className="total">
          ${""}
          {expenses.reduce((acc, curr) => {
            return (acc += curr.amount);
          }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
