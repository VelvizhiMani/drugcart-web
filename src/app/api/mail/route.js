import nodemailer from "nodemailer";
import puppeteer from "puppeteer";
import { NextResponse } from "next/server";
import { DateFormat } from '@/utils/dateFormat'

function numberToWords(n) {
  const ones = [
    "", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
    "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen",
    "sixteen", "seventeen", "eighteen", "nineteen"
  ];
  const tens = [
    "", "", "twenty", "thirty", "forty", "fifty",
    "sixty", "seventy", "eighty", "ninety"
  ];

  if (n < 20) return ones[n];
  if (n < 100) return `${tens[Math.floor(n / 10)]} ${ones[n % 10]}`.trim();
  if (n < 1000) {
    const rem = n % 100;
    return `${ones[Math.floor(n / 100)]} hundred${rem ? " " + numberToWords(rem) : ""}`;
  }
  return "number too large";
}



export async function POST(req) {
  if (req.method !== "POST") {
    return NextResponse.json({ message: "Only POST requests allowed" }, { status: 405 });
  }

  const { to, subject, message } = await req.json();

  const jsonParse = JSON.parse(message)
// console.log('jsonparse', jsonParse);

  const htmlContent = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Invoice - Million Health Pharmaceuticals</title>
<style>
.container {
width: 90%;
margin: 0 auto;
padding: 20px;
}
table {
width: 100%;
border-collapse: collapse;
margin-top: 10px;
}
table, th, td {
border: 1px solid #000;
}
th, td {
padding: 8px;
text-align: left;
}
.no-border td {
border: none;
}
.center {
text-align: center;
}
.bold {
font-weight: bold;
}
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
    <td colspan="2">
        <strong>Invoice #:${jsonParse.orderId}</strong>
    </td>
    <td colspan="4" style="text-align:center;font-size:24px;">
        <strong>Invoice</strong>
    </td>
    <td colspan="2">
        <strong>Date: ${DateFormat(jsonParse.createdAt)}</strong><br/>
        <strong>Buyers Order No:  #${jsonParse.orderId}</strong>
    </td>
  </tr>
  <tr style="text-align:center;">
    <td colspan="2"><strong>Courier:Air </strong></td>
    <td colspan="4"><strong>Payment Terms: Bank Transfer  </strong></td>
    <td colspan="2"><strong>Delivery : By Air EMS</strong></td>
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
    ${jsonParse?.orderItems
      .map((order, i) => `
        <tr>
          <td>${i + 1}</td>
          <td colspan="2">${order?.product_name}</td>
          <td>${order?.packageName}</td>
          <td>${order?.quantity}</td>
          <td>${order?.price}</td>
          <td>Rs.${order?.price}</td>
        </tr>
      `).join('')}
     <tr>
      <td colspan="4">Amount In Words: </td>
      <td colspan="2">Shiping Charges: </td>
      <td><strong>Rs. 0</strong></td>
    </tr>
    <tr>
      <td colspan="4">${numberToWords(jsonParse.itemsPrice)} Rupees Only </td>
      <td colspan="2"><strong>TOTAL :</strong> </td>
      <td><strong>Rs. ${jsonParse.itemsPrice}</strong></td>
    </tr>
    <tr>
      <td colspan="4">D.L.No:2391/M Z1/20B , 2391/M Z1/21B </td>
      <td colspan="3">IEC.No.0415026121. </td>
    </tr>
    <tr>
      <td colspan="4"><strong>Declaration :</strong><br/>
      <p>Hereby we declare that all the informations given
       in this is correct an true to our knowledge</p></td>
      <td colspan="3">
      <strong>for Drugcarts</strong> </br></br></br>
      <strong>PROP/AUTH.SIGN</strong>
      </td>
    </tr>
     <tr>
      <td colspan="7" style="text-align:center;"><strong>Bank Details</strong></td>
     </tr>
     <tr>
      <td colspan="2"><strong>BENEFICIAR </strong></td>
      <td colspan="5"><p>Drugcarts </p></td>
     </tr>
     <tr>
      <td colspan="2"><strong>BENEFICIAR ADDRESS </strong></td>
      <td colspan="5">
      <p>${jsonParse.shippingInfo.cus_name} ${jsonParse.shippingInfo.lastname}, <br/> ${jsonParse.shippingInfo.phone}, <br/> ${jsonParse.shippingInfo.email}, <br/> ${jsonParse.shippingInfo.address}, <br/> ${jsonParse.shippingInfo.town}, <br/> ${jsonParse.shippingInfo.state}, <br/> ${jsonParse.shippingInfo.country}, <br/> ${jsonParse.shippingInfo.postcode}</p></td>
     </tr>
     <tr>
      <td colspan="2"><strong>BENEFICIAR BANK ADDRESS </strong></td>
      <td colspan="5"><p>KOTAK MAHINDRA BANK </p></td>
     </tr>
     <tr>
      <td colspan="2"><strong>SWIFT CODE  </strong></td>
      <td colspan="5"><p>KKBKINBBCPC </p></td>
     </tr>
     <tr>
      <td colspan="2"><strong>IBAN  </strong></td>
      <td colspan="5"><p>401011023808 </p></td>
     </tr>
     <tr>
      <td colspan="2"><strong>DETAILS  </strong></td>
      <td colspan="5"><p>Purchasing Goods for the invoice number DC-INV-535 </p></td>
     </tr>
     <tr>
      <td colspan="2"><strong>INVOICE AMOUNT </strong></td>
      <td colspan="2"><p> ${jsonParse.itemsPrice} </p></td>
      <td colspan="3"><p>CURRENCY : INR </p></td>
     </tr>
     <tr>
      <td colspan="7" style="text-align:center;">
      Thank you for ordering at the Drugcarts online store.<br/>
      If you have any questions, you can email us at the following Phone No : +91 99206 11567
      </td>
     </tr>
  </table>
</div>
  </body>
</html>`;

  try {
    // Step 1: Generate PDF from HTML
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    await page.setContent(htmlContent, { waitUntil: "networkidle0" });

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
    });

    await browser.close();

    // Step 2: Create transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Step 3: Mail options with PDF attachment
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      text: "Please find the attached invoice PDF.",
      html: htmlContent,
      attachments: [
        {
          filename: `Invoice.pdf`,
          content: pdfBuffer,
          contentType: "application/pdf",
        },
      ],
    };

    // Step 4: Send email
    const info = await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully!", info });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to send email", error: error.message },
      { status: 500 }
    );
  }
}
