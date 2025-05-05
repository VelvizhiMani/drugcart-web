// app/api/payu/failure/route.ts
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req) {
  const formData = await req.formData();

  const key = process.env.PAYU_KEY;
  const salt = process.env.PAYU_SALT;

  const txnid = formData.get("txnid");
  const amount = formData.get("amount");
  const productinfo = formData.get("productinfo");
  const firstname = formData.get("firstname");
  const email = formData.get("email");
  const status = formData.get("status");
  const receivedHash = formData.get("hash");

  const hashString = `${salt}|${status}|${email}|${firstname}|${productinfo}|${amount}|${txnid}|${key}`;
  const calcHash = crypto.createHash("sha512").update(hashString).digest("hex");

  if (calcHash === receivedHash) {
    console.log(`❌ Payment Failed: ${txnid}`);
    // Optional: Update DB status to 'failure'
    return NextResponse.redirect(
      `https://main.diinz06zqqfgz.amplifyapp.com/payment-status?status=failure&txnid=${txnid}`
    );
  } else {
    return NextResponse.redirect(
      `https://main.diinz06zqqfgz.amplifyapp.com/payment-status?status=invalid`
    );
  }
}
