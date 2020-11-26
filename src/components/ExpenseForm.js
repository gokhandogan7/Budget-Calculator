import React from "react";
import { MdSend } from "react-icons/md";

export const ExpenseForm = ({
  amount,
  charge,
  handleSubmit,
  handleAmount,
  handleCharge,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="expense">charge</label>
          <input
            type="text"
            className="form-control"
            id="charge"
            name="charge"
            placeholder="e.g. rent"
            value={charge}
            onChange={handleCharge}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">charge</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            name="amount"
            placeholder="e.g. 100"
            value={amount}
            onChange={handleAmount}
          />
        </div>
      </div>
      <button onClick={handleSubmit} className="btn" type="submit" >
        submit <MdSend className="btn-icon" />{" "}
      </button>
    </form>
  );
};
