/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Button, Modal, Container, Row, Col } from "react-bootstrap";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { deleteTransaction } from "../slices/expenseSlice";
import { Card } from "antd";
import TransactionsList from "./TransactionsList";

const { Meta } = Card;

const Transaction = () => {
  const state = useSelector((state) => state.expenseReducer);

  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [editTransaction, setEditTransaction] = useState(null);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = (transaction) => {
    setEditTransaction(transaction);
    setShow(true);
  };

  const handleDelete = (transaction) => {
    dispatch(deleteTransaction(transaction));
  };

  return (
    <Container>
      <Row>
        <Col>
          <Modal size="lg" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Transaction</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <TransactionsList
                editTransactionDetail={editTransaction}
                closeModal={handleClose}
              />
            </Modal.Body>
          </Modal>
          {state.transactions.map((transaction, index) => {
            return (
              <Card
                key={index}
                style={{
                  width: 300,
                }}
                cover={
                  <img
                    alt="transaction"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
                actions={[
                  <EditOutlined
                    key="edit"
                    onClick={() => handleShow(transaction)}
                  />,
                  <DeleteOutlined
                    key="delete"
                    onClick={() => handleDelete(transaction)}
                  />,
                ]}
              >
                <div>
                  <p>Title: {transaction.title}</p>
                  <p>Type: {transaction.type}</p>
                  <p>Amount: {transaction.amount}</p>
                </div>
              </Card>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default Transaction;
