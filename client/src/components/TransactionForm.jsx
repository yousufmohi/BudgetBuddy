import { useState } from "react";
import { addTransaction } from "../lib/api";
import '../App.css'

export default function TransactionForm({ onAdd }) {
  const [form, setForm] = useState({
    type: "expense",
    category: "",
    description: "",
    amount: "",
    date: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await addTransaction(form);
      onAdd(data);
      // Reset form
      setForm({ type: "expense", category: "", description: "", amount: "", date: "" });
    } catch (err) {
      console.error("Error adding transaction:", err.response?.data || err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6">
      <select
        name="type"
        value={form.type}
        onChange={handleChange}
        className="border p-2 mb-2 w-full"
      >
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>

      <input
        type="text"
        name="category"
        placeholder="Category"
        value={form.category}
        onChange={handleChange}
        className="border p-2 mb-2 w-full"
        required
      />

      <input
        type="text"
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        className="border p-2 mb-2 w-full"
        required
      />

      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={form.amount}
        onChange={handleChange}
        className="border p-2 mb-2 w-full"
        required
      />

      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        className="border p-2 mb-2 w-full"
        required
      />

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded w-full"
      >
        Add Transaction
      </button>
    </form>
  );
}
