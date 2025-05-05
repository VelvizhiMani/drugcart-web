import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      txnid,
      amount,
      productinfo,
      firstname,
      email,
      phone,
    } = body;

    const key = process.env.PAYU_KEY;
    const salt = process.env.PAYU_SALT;

    if (!key || !salt) {
      console.error('Missing PAYU_KEY or PAYU_SALT');
      return NextResponse.json({ error: 'Missing PAYU credentials' }, { status: 500 });
    }

    const hashString = `${key}|${txnid}|${amount}|${productinfo}|${firstname}|${email}|||||||||||${salt}`;
    const hash = crypto.createHash('sha512').update(hashString).digest('hex');

    const payload = {
      key,
      txnid,
      amount,
      productinfo,
      firstname,
      email,
      phone,
      surl: `${process.env.NEXT_PUBLIC_BASE_URL}/payment/success`,
      furl: `${process.env.NEXT_PUBLIC_BASE_URL}/failure`,
      hash,
      service_provider: 'payu_paisa',
    };

    return NextResponse.json(payload);
  } catch (err) {
    console.error('Server error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}