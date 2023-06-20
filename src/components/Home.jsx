/* eslint-disable no-unused-vars */
import React from "react";
import Balance from "./Balance";
import Forms from "./Forms";
import Transaction from "./Transaction";

export default function Home() {
  return (
    <div className="home">
      <h1>Expense Tracker</h1>
      <Balance />
      <Forms />
      <Transaction />
    </div>
  );
}
