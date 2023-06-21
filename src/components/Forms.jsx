/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTransaction } from "../slices/expenseSlice";
import { v4 as uuidv4 } from "uuid";
//import { DatePicker, Space } from "antd";

const Forms = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [type, setType] = useState("income");
  const [amount, setAmount] = useState("");

  const handleTitleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleTypeChange = (e) => {
    e.preventDefault();
    setType(e.target.value);
  };

  const handleAmountChange = (e) => {
    e.preventDefault();
    setAmount(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: uuidv4(),
      title,
      type,
      amount: Number(amount),
    };

    dispatch(addTransaction(newTransaction));
    setTitle("");
    setType("income");
    setAmount("");
  };

  return (
    <div className="forms">
      <h2 className="add-tran">Add Transaction</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group mb-3">
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div className="form-group mb-3 w-75">
          <label className="w-50">Type:</label>
          <select value={type} onChange={handleTypeChange}>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        <div className="form-group mb-3">
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            required
          />
        </div>

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Forms;
