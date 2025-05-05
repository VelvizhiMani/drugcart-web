// app/pay/page.tsx
"use client";
import { useState } from "react";

export default function PaymentPage() {
  const [amount, setAmount] = useState("100");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/payu/initiate", {
      method: "POST",
      body: JSON.stringify({ amount }),
    });
    const data = await res.json();
    if (data) {
      window.location.href = data;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-8 space-y-4">
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        className="border p-2"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Pay Now
      </button>
    </form>
  );
}
