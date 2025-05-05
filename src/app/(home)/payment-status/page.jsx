// app/payment-status/page.tsx
"use client";
import { useSearchParams } from "next/navigation";

export default function PaymentStatusPage() {
  const params = useSearchParams();
  const status = params.get("status");
  const txnid = params.get("txnid");

  return (
    <div className="p-8 text-center">
      {status === "success" && (
        <h1 className="text-green-600 text-2xl">
          ✅ Payment Successful
          <br />
          Transaction ID: {txnid}
        </h1>
      )}
      {status === "failure" && (
        <h1 className="text-red-600 text-2xl">
          ❌ Payment Failed
          <br />
          Transaction ID: {txnid}
        </h1>
      )}
      {status === "invalid" && (
        <h1 className="text-yellow-600 text-2xl">⚠️ Invalid Hash / Tampered</h1>
      )}
    </div>
  );
}
