"use client";
import { useState } from "react";
import TransactionForm from "../../components/TransactionForm";
import TransactionList from "../../components/TransactionList";
import SpendingChart from "../../components/SpendingChart";
import '../../App.css'

function BalanceSummary({ transactions }) {
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  return (
    <div className="p-4 bg-green-100 rounded">
      <h2>Balance: ${income - expenses}</h2>
      <p>Income: ${income}</p>
      <p>Expenses: ${expenses}</p>
    </div>
  );
}


export default function Dashboard() {
  const [transactions, setTransactions] = useState([]);

  const handleAdd = (newTx) => {
    setTransactions((prev) => [newTx, ...prev]);
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <TransactionForm onAdd={handleAdd} />
        <TransactionList transactions={transactions} setTransactions={setTransactions} />
      </div>
      <div>
        <BalanceSummary transactions={transactions} />
        <SpendingChart transactions={transactions} />
      </div>
    </div>
  );
}
