import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req) {
  const body = await req.json();
  const { amount } = body;

  const key = process.env.PAYU_KEY;
  const salt = process.env.PAYU_SALT;

  if (!key || !salt) {
    return NextResponse.json(
      { error: "Missing PayU credentials" },
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

  const hashString = `${key}|${txnid}|${amount}|${productinfo}|${firstname}|${email}|||||||||||${salt}`;
  const hash = crypto.createHash("sha512").update(hashString).digest("hex");

  const htmlForm = `
    <html>
      <body onload="document.forms[0].submit()">
        <form action="https://secure.payu.in/_payment" method="post">
          <input type="hidden" name="key" value="${key}" />
          <input type="hidden" name="txnid" value="${txnid}" />
          <input type="hidden" name="amount" value="${amount}" />
          <input type="hidden" name="productinfo" value="${productinfo}" />
          <input type="hidden" name="firstname" value="${firstname}" />
          <input type="hidden" name="email" value="${email}" />
          <input type="hidden" name="phone" value="${phone}" />
          <input type="hidden" name="surl" value="${surl}" />
          <input type="hidden" name="furl" value="${furl}" />
          <input type="hidden" name="hash" value="${hash}" />
          <input type="hidden" name="service_provider" value="payu_paisa" />
        </form>
      </body>
    </html>
  `;

  return new NextResponse(htmlForm, {
    headers: { "Content-Type": "text/html" },
  });
}
