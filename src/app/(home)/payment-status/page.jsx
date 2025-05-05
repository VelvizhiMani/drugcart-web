"use client";
import { useSearchParams } from "next/navigation";

export default function PaymentStatusPage() {
  const searchParams = useSearchParams();
  const status = searchParams.get("status");

  return (
    <div style={{ padding: "2rem" }}>
      {status === "success" && <p>✅ Payment successful!</p>}
      {status === "failure" && <p>❌ Payment failed.</p>}
      {status === "invalid" && <p>⚠️ Invalid payment status.</p>}
      {!["success", "failure", "invalid"].includes(status) && (
        <p>🤔 Unknown payment status.</p>
      )}
    </div>
  );
}
