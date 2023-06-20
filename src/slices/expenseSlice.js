import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactions: [
    {
      title: "hellll",
      type: "income",
      amount: 34,
    },
    { title: "happ", type: "expense", amount: 200 },
  ],
  balance: 0,
};

const expenseSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      const { title, type, amount } = action.payload;
      const newTransaction = {
        id: Date.now(),
        title,
        type,
        amount,
      };
      state.transactions.push(newTransaction);
      state.balance += type === "income" ? amount : -amount;
    },
    deleteTransaction: (state, action) => {
      const transactionId = action.payload;
      const transactionIndex = state.transactions.findIndex(
        (transaction) => transaction.id === transactionId
      );
      if (transactionIndex !== -1) {
        const transaction = state.transactions[transactionIndex];
        state.transactions.splice(transactionIndex, 1);
        state.balance -=
          transaction.type === "income"
            ? transaction.amount
            : -transaction.amount;
      }
    },
    editTransaction: (state, action) => {
      const { id, title, type, amount } = action.payload;
      const transactionIndex = state.transactions.findIndex(
        (transaction) => transaction.id === id
      );
      if (transactionIndex !== -1) {
        const transaction = state.transactions[transactionIndex];
        state.transactions[transactionIndex] = {
          ...transaction,
          title,
          type,
          amount,
        };
        
        const amountDifference =
          type === "income"
            ? amount - transaction.amount
            : transaction.amount - amount;
        state.balance +=
          type === transaction.type ? amountDifference : -amountDifference;
      }
    },
  },
});

export const { addTransaction, deleteTransaction, editTransaction } =
  expenseSlice.actions;

export default expenseSlice.reducer;
