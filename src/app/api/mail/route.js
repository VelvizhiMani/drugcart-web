import nodemailer from "nodemailer";
import puppeteer from "puppeteer";
import { NextResponse } from "next/server";
import { DateFormat } from "@/utils/dateFormat";

// your numberToWords function
function numberToWords(num) {
  const ones = [
    "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
    "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen",
    "Sixteen", "Seventeen", "Eighteen", "Nineteen"
  ];

  const tens = [
    "", "", "Twenty", "Thirty", "Forty", "Fifty",
    "Sixty", "Seventy", "Eighty", "Ninety"
  ];

  const convertTwoDigits = (n) => {
    if (n < 20) return ones[n];
    const t = Math.floor(n / 10);
    const o = n % 10;
    return tens[t] + (o ? "-" + ones[o] : "");
  };

  const convertThreeDigits = (n) => {
    const h = Math.floor(n / 100);
    const rem = n % 100;
    if (h === 0) return convertTwoDigits(rem);
    return ones[h] + " Hundred" + (rem ? " and " + convertTwoDigits(rem) : "");
  };

  if (num === 0) return "Zero";

  if (num < 1000) return convertThreeDigits(num);

  if (num < 100000) {
    const th = Math.floor(num / 1000);
    const rem = num % 1000;
    const thousandPart = convertThreeDigits(th) + " Thousand";
    return thousandPart + (rem ? " " + convertThreeDigits(rem) : "");
  }

  return "Number too large";
}

// function to generate PDF Buffer from HTML
async function generatePdfBuffer(htmlContent) {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    headless: "new"
  });
  const page = await browser.newPage();
  await page.setContent(htmlContent, { waitUntil: "networkidle0" });
  const pdfBuffer = await page.pdf({ format: "A4" });
  await browser.close();
  return pdfBuffer;
}

export async function POST(req) {
  if (req.method !== "POST") {
    return NextResponse.json({ message: "Only POST requests allowed" }, { status: 405 });
  }

  const { to, subject, message } = await req.json();
  const jsonParse = JSON.parse(message);

  const htmlContent = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Invoice - Million Health Pharmaceuticals</title>
<style>
.container { width: 90%; margin: 0 auto; padding: 20px; }
table { width: 100%; border-collapse: collapse; margin-top: 10px; }
table, th, td { border: 1px solid #000; }
th, td { padding: 8px; text-align: left; }
.no-border td { border: none; }
.center { text-align: center; }
.bold { font-weight: bold; }
</style>
</head>
<body>
<div class="container">
<table class="border">
  <tr>
    <td colspan="8" style="text-align: center;">
      <strong><h1>DRUGCARTS</h1></strong>
      <p>Portion A First Floor, No.50, Pedariyar Koil Street, Seven Wells, Chennai-600001</p>
      <p>Email: drugcartspro@gmail.com, Website: www.drugcarts.com</p>
    </td>
  </tr>
  <tr style="text-align:center;">
    <td colspan="2"><strong>Invoice #: ${jsonParse.orderId}</strong></td>
    <td colspan="4" style="text-align:center;font-size:24px;"><strong>Invoice</strong></td>
    <td colspan="2"><strong>Date: ${DateFormat(jsonParse.createdAt)}</strong><br/>
    <strong>Buyers Order No: ${jsonParse.orderId}</strong></td>
  </tr>
  <tr style="text-align:center;">
    <td colspan="2"><strong>Courier: Air</strong></td>
    <td colspan="4"><strong>Payment Terms: Bank Transfer</strong></td>
    <td colspan="2"><strong>Delivery: By Air EMS</strong></td>
  </tr>
  <tr>
    <td colspan="4">
      <strong>Bill To/Name of the Buyer:</strong>
      <p style="text-transform: capitalize">${jsonParse.shippingInfo.cus_name} ${jsonParse.shippingInfo.lastname},</p>
      <p>${jsonParse.shippingInfo.address},</p>
      <p>${jsonParse.shippingInfo.town}</p>
      <p>${jsonParse.shippingInfo.state}, ${jsonParse.shippingInfo.country} - ${jsonParse.shippingInfo.postcode}</p>
      <strong>Mobile: ${jsonParse.shippingInfo.phone}</strong>
    </td>
    <td colspan="4">
      <strong>Ship To/Delivery At:</strong>
      <p style="text-transform: capitalize">${jsonParse.shippingInfo.cus_name} ${jsonParse.shippingInfo.lastname},</p>
      <p>${jsonParse.shippingInfo.address},</p>
      <p>${jsonParse.shippingInfo.town}</p>
      <p>${jsonParse.shippingInfo.state}, ${jsonParse.shippingInfo.country} - ${jsonParse.shippingInfo.postcode}</p>
      <strong>Mobile: ${jsonParse.shippingInfo.phone}</strong>
    </td>
  </tr>
</table>
<table>
  <tr>
    <th style="width:10%;">S.NO</th>
    <th colspan="2">Product</th>
    <th>Packing</th>
    <th>Quantity</th>
    <th>Unit</th>
    <th>Amount</th>
  </tr>
  ${jsonParse.orderItems.map((order, i) => `
    <tr>
      <td>${i + 1}</td>
      <td colspan="2">${order.product_name}</td>
      <td>${order.packageName}</td>
      <td>${order.quantity}</td>
      <td>${order.price}</td>
      <td>Rs.${order.price}</td>
    </tr>
  `).join('')}
  <tr>
    <td colspan="4">Amount In Words:</td>
    <td colspan="2">Shipping Charges:</td>
    <td><strong>Rs. 0</strong></td>
  </tr>
  <tr>
    <td colspan="4">${numberToWords(jsonParse.itemsPrice)} Rupees Only</td>
    <td colspan="2"><strong>TOTAL:</strong></td>
    <td><strong>Rs. ${jsonParse.itemsPrice}</strong></td>
  </tr>
  <tr>
    <td colspan="4">D.L.No:2391/M Z1/20B, 2391/M Z1/21B</td>
    <td colspan="3">IEC.No.0415026121.</td>
  </tr>
  <tr>
    <td colspan="4"><strong>Declaration:</strong><br/>
    <p>Hereby we declare that all the information given in this is correct and true to our knowledge.</p></td>
    <td colspan="3">
    <strong>for Drugcarts</strong><br/><br/><br/>
    <strong>PROP/AUTH.SIGN</strong>
    </td>
  </tr>
  <tr>
    <td colspan="7" class="center"><strong>Bank Details</strong></td>
  </tr>
  <tr>
    <td colspan="2"><strong>BENEFICIAR</strong></td>
    <td colspan="5">Drugcarts</td>
  </tr>
  <tr>
    <td colspan="2"><strong>BENEFICIAR ADDRESS</strong></td>
    <td colspan="5">${jsonParse.shippingInfo.cus_name} ${jsonParse.shippingInfo.lastname}, <br/>
    ${jsonParse.shippingInfo.phone}, <br/>
    ${jsonParse.shippingInfo.email}, <br/>
    ${jsonParse.shippingInfo.address}, <br/>
    ${jsonParse.shippingInfo.town}, <br/>
    ${jsonParse.shippingInfo.state}, <br/>
    ${jsonParse.shippingInfo.country}, <br/>
    ${jsonParse.shippingInfo.postcode}</td>
  </tr>
  <tr>
    <td colspan="2"><strong>BENEFICIAR BANK ADDRESS</strong></td>
    <td colspan="5">KOTAK MAHINDRA BANK</td>
  </tr>
  <tr>
    <td colspan="2"><strong>SWIFT CODE</strong></td>
    <td colspan="5">KKBKINBBCPC</td>
  </tr>
  <tr>
    <td colspan="2"><strong>IBAN</strong></td>
    <td colspan="5">401011023808</td>
  </tr>
  <tr>
    <td colspan="2"><strong>DETAILS</strong></td>
    <td colspan="5">Purchasing Goods for the invoice number #${jsonParse.orderId}</td>
  </tr>
  <tr>
    <td colspan="2"><strong>INVOICE AMOUNT</strong></td>
    <td colspan="2">${jsonParse.itemsPrice}</td>
    <td colspan="3">CURRENCY: INR</td>
  </tr>
  <tr>
    <td colspan="7" class="center">
      Thank you for ordering at the Drugcarts online store.<br/>
      If you have any questions, you can email us or call: +91 99206 11567
    </td>
  </tr>
</table>
</div>
</body>
</html>`;

  try {
    const pdfBuffer = await generatePdfBuffer(htmlContent);

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      text: "Please find the attached invoice PDF.",
      html: htmlContent,
      attachments: [
        {
          filename: "Invoice.pdf",
          content: pdfBuffer,
          contentType: "application/pdf",
        },
      ],
    };

    const info = await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully!", info });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to send email", error: error.message },
      { status: 500 }
    );
  }
}
