// app/api/payu/initiate/route.ts
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req) {
  try {
    const body = await req.json();
    const { amount } = body;

    if (!amount) {
      return NextResponse.json({ error: "Amount is required" }, { status: 400 });
    }

    const key = process.env.PAYU_KEY;
    const salt = process.env.PAYU_SALT;

    if (!key || !salt) {
      return NextResponse.json(
        { error: "Missing PAYU_KEY or PAYU_SALT in environment" },
        { status: 500 }
      );
    }

    const txnid = "txn_" + Date.now();
    const productinfo = "Test Product";
    const firstname = "John";
    const email = "velvizhicheck@gmail.com";
    const phone = "8056800773";
    const surl = "https://main.diinz06zqqfgz.amplifyapp.com/api/payu/success";
    const furl = "https://main.diinz06zqqfgz.amplifyapp.com/api/payu/failure";

    const hashString = `${key}|${txnid}|${amount}|${productinfo}|${firstname}|${email}|${salt}`;
    const hash = crypto.createHash("sha512").update(hashString).digest("hex");

    const payuUrl = "https://secure.payu.in/_payment";

    const formParams = new URLSearchParams({
      key,
      txnid,
      amount,
      productinfo,
      firstname,
      email,
      phone,
      surl,
      furl,
      hash,
      service_provider: "payu_paisa",
    });

    return NextResponse.json({
      redirectUrl: `${payuUrl}?${formParams.toString()}`,
    });
  } catch (err) {
    console.error("PayU error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
