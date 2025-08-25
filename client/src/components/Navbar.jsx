"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    router.push("/login");
  };

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link href="/">
        <h1 className="text-2xl font-bold text-indigo-600">BudgetBuddy</h1>
      </Link>

      <div className="flex items-center space-x-4">
        <Link href="/" className="hover:text-indigo-600 transition">
          Home
        </Link>
        {isLoggedIn && (
          <Link href="/dashboard" className="hover:text-indigo-600 transition">
            Dashboard
          </Link>
        )}

        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Logout
          </button>
        ) : (
          <>
            <Link href="/login" className="hover:text-indigo-600 transition">
              Login
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
