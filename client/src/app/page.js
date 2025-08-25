"use client";
import Link from "next/link";
import '.././App.css'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-50 to-white px-6">
      <section className="text-center max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          Welcome to <span className="text-indigo-600">BudgetBuddy</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Track your expenses, visualize your spending, and take control of your
          financial future.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/signup"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-medium shadow hover:bg-indigo-700 transition"
          >
            Get Started
          </Link>
          <Link
            href="/login"
            className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg text-lg font-medium hover:bg-indigo-50 transition"
          >
            Log In
          </Link>
        </div>
      </section>

      <section className="mt-16 grid gap-8 sm:grid-cols-3 text-center max-w-5xl">
        <div className="p-6 bg-white shadow rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Track Spending</h3>
          <p className="text-gray-600">
            Log income and expenses with ease to keep your budget on track.
          </p>
        </div>
        <div className="p-6 bg-white shadow rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Visualize Data</h3>
          <p className="text-gray-600">
            Get insights through charts that break down your finances.
          </p>
        </div>
        <div className="p-6 bg-white shadow rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Stay in Control</h3>
          <p className="text-gray-600">
            See your balance in real-time and make smarter financial decisions.
          </p>
        </div>
      </section>
    </div>
  );
}
