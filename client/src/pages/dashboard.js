import { useEffect, useState } from "react";
import TransactionForm from "../components/TransactionForm";
import TransactionsList from "../components/TransactionList";
import { getTransactions } from "../lib/api";

export default function Dashboard() {
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    try {
      const { data } = await getTransactions();
      setTransactions(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      <TransactionForm onAdd={(newTransaction) => setTransactions([...transactions, newTransaction])} />

      <TransactionsList transactions={transactions} setTransactions={setTransactions} />
    </div>
  );
}
