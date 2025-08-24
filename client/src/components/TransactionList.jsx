import { useEffect, useState } from "react";
import { getTransactions, deleteTransaction } from "../lib/api";

export default function TransactionsList() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const { data } = await getTransactions();
        setTransactions(data); 
      } catch (err) {
        console.error("Error fetching transactions:", err.response?.data || err.message);
      }
    };
    fetchTransactions();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteTransaction(id);
      setTransactions(transactions.filter((t) => t._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Transactions</h2>
      {transactions.length === 0 ? (
        <p>No transactions found.</p>
      ) : (
        <ul className="space-y-2">
          {transactions.map((t) => (
            <li
              key={t._id}
              className="flex justify-between bg-gray-100 p-2 rounded"
            >
              <div>
                <p className="font-semibold">{t.category}</p>
                <p>{t.description}</p>
                <p className="text-sm text-gray-500">{new Date(t.date).toLocaleDateString()}</p>
              </div>
              <div className="text-right">
                <p className={t.type === "income" ? "text-green-600" : "text-red-600"}>
                  ${t.amount}
                </p>
                <button
                  onClick={() => handleDelete(t._id)}
                  className="bg-red-500 text-white px-2 py-1 mt-1 rounded"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
