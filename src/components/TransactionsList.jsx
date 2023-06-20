/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editTransaction } from "../slices/expenseSlice";

const TransactionsList = ({ editTransactionDetail, closeModal }) => {
  const dispatch = useDispatch();

  const [editedTransaction, setEditedTransaction] = useState({
    id: editTransactionDetail.id,
    title: editTransactionDetail.title,
    type: editTransactionDetail.type,
    amount: editTransactionDetail.amount,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(editTransaction(editedTransaction));
    closeModal();
  };

  const handleChange = (e) => {
    e.preventDefault();
    setEditedTransaction({
      ...editedTransaction,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            name="title"
            type="text"
            value={editedTransaction.title}
            placeholder="Please enter Title"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicType">
          <Form.Label>Type:</Form.Label>
          <Form.Select aria-label="Default select example">
            <option name="type" value={editedTransaction.type}>
              Income
            </option>
            <option name="type" value={editedTransaction.type}>
              Expense
            </option>
            onChange={handleChange}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicAmount">
          <Form.Label>Amount</Form.Label>
          <Form.Control
            name="amount"
            type="text"
            value={editedTransaction.amount}
            placeholder="Enter amount"
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" value="save" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default TransactionsList;
