import "./App.css";
import React, { useState, useEffect } from "react";
import { ExpenseList } from "./components/ExpenseList";
import { ExpenseForm } from "./components/ExpenseForm";
import { Alert } from "./components/Alert";
import { v4 as uuidv4 } from "uuid";

const initialExpenses = [
  { id: uuidv4(), charge: "rent", amount: 1700 },
  { id: uuidv4(), charge: "car payment", amount: 1666 },
  { id: uuidv4(), charge: "credit card bill", amount: 1000 },
];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState("");
  const [alert, setAlert] = useState({show:false})

  const handleCharge = (e) => {
    setCharge(e.target.value);
   
  };
  const handleAmount = (e) => {
    setAmount(e.target.value);
    
  };
  //Handle Alert
  const handleAlert = ({type, text}) =>{
    setAlert({show:true, type, text});
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (charge !== '' && amount > 0) {
      const singleExpense ={
        id:uuidv4(), charge, amount
      }
      setExpenses([...expenses, singleExpense])
      setAmount('')
      setCharge('')
    } else{
      //handle alert
    }
  };

  return (
    <>
    {alert.show && <Alert type={alert.show} text={alert.text}/>}
      <Alert />
      <h1>Budget Calculator</h1>
      <main className="App">
        <ExpenseForm
          charge={charge}
          amount={amount}
          handleCharge={handleCharge}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
        />
        <ExpenseList setExpenses={setExpenses} initialExpenses={initialExpenses} expenses={expenses} />
      </main>
      <h1>
        total spending:{" "}
        <span className="total">
          ${""}
          {expenses.reduce((acc, curr) => {
            return (acc += parseInt(curr.amount));
          }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
