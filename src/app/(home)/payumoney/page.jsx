'use client';

import { useState } from 'react';

export default function PayNow() {
  const [loading, setLoading] = useState(false);

  const handlePayNow = async () => {
    setLoading(true);

    const txnid = 'txn' + Date.now(); // Unique txn ID
    const res = await fetch('/api/payu/initiate', {
      method: 'POST',
      body: JSON.stringify({
        txnid,
        amount: '1.00',
        productinfo: 'Test Product',
        firstname: 'John',
        email: 'john@example.com',
        phone: '9999999999',
      }),
    });

    const data = await res.json();

    // Create form and submit to PayU
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = `${process.env.NEXT_PUBLIC_PAYU_BASE_URL}/_payment`;
    form.target = '_blank'; // 🔥 Open in new tab
    Object.entries(data).forEach(([key, value]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = value;
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();
  };

  return (
    <button onClick={handlePayNow} disabled={loading}>
      {loading ? 'Processing...' : 'Pay Now'}
    </button>
  );
}
