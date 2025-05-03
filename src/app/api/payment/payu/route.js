import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(req) {
  const body = await req.json();
  const { txnid, amount, firstname, email, phone, productinfo } = body;

  const key = process.env.PAYU_KEY
  const salt = process.env.PAYU_SALT;
  const action = process.env.PAYU_BASE_URL;

  const hashString = `${key}|${txnid}|${amount}|${productinfo}|${firstname}|${email}|||||||||||${salt}`;
  const hash = crypto.createHash('sha512').update(hashString).digest('hex');

  return NextResponse.json({
    key,
    txnid,
    amount,
    firstname,
    email,
    phone,
    productinfo,
    surl: 'https://example.com/payment-success',
    furl: 'https://example.com/payment-failure',
    hash,
    action,
    service_provider: 'payu_paisa',
  });
}
