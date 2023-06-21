/* eslint-disable no-unused-vars */
import { Container, Row, Col } from "react-bootstrap";

import React from "react";
import Balance from "./Balance";
import Forms from "./Forms";
import Transaction from "./Transaction";

export default function Home() {
  return (
    <>
      <Container>
        <Row>
          <Col className="balance-form-section" md={4}>
            <h2 className="border m-5 header">Expense Tracker</h2>
            <Balance />
            <Forms />
          </Col>
          <Col className="transaction-section" md={8}>
            <Transaction />
          </Col>
        </Row>
      </Container>
    </>
  );
}
