import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";

export const ExpenseItem = ({ item, handleEdit, handleDelete }) => {
  return (
    <li className="item">
      <div className="info">
        <span className="expense">{item.charge}</span>
        <span className="amount">${item.amount}</span>
      </div>
      <div>
        <button onClick={() => handleDelete(item.id)} className="clear-btn">
          {" "}
          <MdDelete />{" "}
        </button>
        <button onClick={() =>handleEdit(item.id)} className="edit-btn">
          {" "}
          <MdEdit />{" "}
        </button>
      </div>
    </li>
  );
};
