import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import '../App.css'

export default function SpendingChart({ transactions }) {
  const data = transactions.reduce((acc, t) => {
    const found = acc.find((d) => d.name === t.category);
    if (found) {
      found.value += Number(t.amount);
    } else {
      acc.push({ name: t.category, value: Number(t.amount) });
    }
    return acc;
  }, []);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <PieChart width={400} height={300}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={100}
        fill="#8884d8"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
}
