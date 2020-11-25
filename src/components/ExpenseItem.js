import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";

export const ExpenseItem = ({ item }) => {
  return (
    <li className="item">
      <div className="info">
        <span className="expense">{item.charge}</span>
        <span className="amount">${item.amount}</span>
      </div>
      <div>
        <button className="clear-btn">
          {" "}
          <MdDelete />{" "}
        </button>
        <button className="edit-btn">
          {" "}
          <MdEdit />{" "}
        </button>
      </div>
    </li>
  );
};
