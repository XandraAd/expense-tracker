/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import numberWithCommas from "./BalanceSelector";

export default function Balance() {
  const balance = useSelector((state) => {
    return state.balance;
  });

  return (
    <div className="balance">
      <h2>Balance</h2>
      <h3>Ghs {balance}</h3>
    </div>
  );
}
