// app/api/payu/initiate/route.ts
import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req) {
  const { amount } = await req.json();

  const key = process.env.PAYU_KEY;
  const salt = process.env.PAYU_SALT;
  const txnid = "txn_" + Date.now();
  const productinfo = "Test Product";
  const firstname = "John";
  const email = "velvizhicheck@gmail.com";
  const phone = "8056800773";
  const surl = "https://main.diinz06zqqfgz.amplifyapp.com/api/payu/success";
  const furl = "https://main.diinz06zqqfgz.amplifyapp.com/api/payu/failure";

  const hashString = `${key}|${txnid}|${amount}|${productinfo}|${firstname}|${email}|${salt}`;
  const hash = crypto.createHash("sha512").update(hashString).digest("hex");

  const payuUrl = PAYU_BASE_URL;
  //   const payuUrl = "https://secure.payu.in/_payment";

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

  console.log(formParams, "formParams");
  return NextResponse.json({
    redirectUrl: `${payuUrl}?${formParams.toString()}`,
  });
}
