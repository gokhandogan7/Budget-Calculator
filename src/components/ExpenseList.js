import React from "react";
import { ExpenseItem } from "./ExpenseItem";
import { MdDelete } from "react-icons/md";

export const ExpenseList = ({ expenses, setExpenses }) => {
  


  return (
    <>
      <ul className="list">
        {expenses?.map((expense) => {
          return <ExpenseItem key={expense.id} item={expense} />;
        })}
      </ul>

      {expenses.length > 0 && (
        <button onClick={()=>setExpenses([])} className="btn">
          clear expenses <MdDelete className="btn-icon" />{" "}
        </button>
      )}
    </>
  );
};
