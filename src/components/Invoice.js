// components/Invoice.js
"use client";
import { useRef } from "react";

export default function Invoice() {
  const invoiceRef = useRef();

  const generatePDF = async () => {
    const html2pdf = (await import("html2pdf.js")).default;
    const element = invoiceRef.current;
    const options = {
      margin: 0.5,
      filename: "invoice.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().set(options).from(element).save();
  };

  return (
    <div className="p-4">
      <div
        ref={invoiceRef}
        className="bg-white shadow-xl rounded-lg p-8 max-w-7xl mx-auto text-sm text-gray-800"
      >
        <div className="text-center">
          <h1 className="text-2xl font-bold">Invoice</h1>
          <p className="text-sm text-gray-500">#DC-INV-001</p>
        </div>

        <div className="container mx-auto p-6">
          <div className="mb-6">
            <table className="w-full border border-black table-auto">
              <thead>
                <tr>
                  <th className="border px-2 py-1" colSpan="8">
                    <h2 className="text-xl font-bold text-center">DRUGCARTS</h2>
                    <p className="text-center">
                      Portion A First Floor, No.50, Pedariyar Koil Street, Seven
                      Wells, Chennai-600001
                      <br />
                      Email: drugcartspro@gmail.com, Website: www.drugcarts.com
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-2 py-1" colSpan="2">
                    <p className="font-semibold"> Invoice #: DC-INV-535</p>
                  </td>
                  <td
                    className="border px-2 py-1 font-bold text-md"
                    colSpan="4"
                  >
                    Invoice{" "}
                  </td>
                  <td className="border px-2 py-1" colSpan="2">
                    <p className="font-semibold">
                      {" "}
                      Date: 21-11-2017 <br />
                      Buyers Order No: DC-INV-535{" "}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-2" colSpan="4">
                    <p className="font-semibold">Bill To/Name of the Buyer:</p>
                    <p>No. 105, Reddiyar Street,</p>
                    <p>Alagramam & post, Tindivanam(t.k)</p>
                    <p>Villupuram Dist, Tamilnadu - 604302</p>
                    <strong>Mobile: 0740501174</strong>
                  </td>
                  <td className="border px-2 py-2" colSpan="4">
                    <p className="font-semibold">Ship To/Delivery At:</p>
                    <p>No. 105, Reddiyar Street,</p>
                    <p>Alagramam & post, Tindivanam(t.k)</p>
                    <p>Villupuram Dist, Tamilnadu - 604302</p>
                    <strong>Mobile: 0740501174</strong>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="w-full border border-black table-auto">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border px-2 py-1 w-[10px]">S.NO</th>
                  <th className="border px-2 py-1" colSpan="3">
                    Product Name
                  </th>
                  <th className="border px-2 py-1">Packing</th>
                  <th className="border px-2 py-1">Quantity</th>
                  <th className="border px-2 py-1">Unit</th>
                  <th className="border px-2 py-1">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-2 py-1">1</td>
                  <td className="border px-2 py-1" colSpan="3">
                    Ledifos - 12 weeks
                  </td>
                  <td className="border px-2 py-1">30 Tablets</td>
                  <td className="border px-2 py-1">1</td>
                  <td className="border px-2 py-1">699</td>
                  <td className="border px-2 py-1">Rs. 699</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1" colSpan="5">
                    Amount In Words:{" "}
                  </td>
                  <td className="border px-2 py-1" colSpan="2">
                    Shiping Charges:
                  </td>
                  <td className="border px-2 py-1">Rs. 0</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1" colSpan="5">
                    Six Hundred and Ninety-Nine US Dollars Only{" "}
                  </td>
                  <td className="border px-2 py-1" colSpan="2">
                    <p className="font-semibold"> TOTAL :</p>
                  </td>
                  <td className="border px-2 py-1">
                    <p className="font-semibold">Rs. 699</p>
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1" colSpan="4">
                    D.L.No:2391/M Z1/20B , 2391/M Z1/21B{" "}
                  </td>
                  <td className="border px-2 py-1" colSpan="4">
                    IEC.No.0415026121.{" "}
                  </td>
                </tr>
                <tr>
                  <td colSpan="4" className="border px-2 py-1">
                    <p className="font-semibold"> Declaration :</p>
                    <br />
                    <p>
                      Hereby we declare that all the informations given in this
                      is correct an true to our knowledge
                    </p>
                  </td>
                  <td colSpan="4" className="border px-2 py-1">
                    <p className="font-semibold">
                      for Drugcarts <br />
                      <br />
                      <br />
                      PROP/AUTH.SIGN
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="8" className="border px-2 py-1 text-center">
                    <p className="font-semibold">Bank Details</p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="3" className="border px-2 py-1">
                    <strong>BENEFICIAR </strong>
                  </td>
                  <td colSpan="5" className="border px-2 py-1">
                    <p>Drugcarts </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="3" className="border px-2 py-1">
                    <strong>BENEFICIAR ADDRESS </strong>
                  </td>
                  <td colSpan="5" className="border px-2 py-1">
                    <p>
                      Portion "A" First Floor,Old No. 131, New No. 50,Pedariyar
                      Koil Street, <br />
                      Seven Wells,Chennai - 600001. India{" "}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="3" className="border px-2 py-1">
                    <strong>BENEFICIAR BANK ADDRESS </strong>
                  </td>
                  <td colSpan="5" className="border px-2 py-1">
                    <p>KOTAK MAHINDRA BANK </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="3" className="border px-2 py-1">
                    <strong>SWIFT CODE </strong>
                  </td>
                  <td colSpan="5" className="border px-2 py-1">
                    <p>KKBKINBBCPC </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="3" className="border px-2 py-1">
                    <strong>IBAN </strong>
                  </td>
                  <td colSpan="5" className="border px-2 py-1">
                    <p>401011023808 </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="3" className="border px-2 py-1">
                    <strong>DETAILS </strong>
                  </td>
                  <td colSpan="5" className="border px-2 py-1">
                    <p>Purchasing Goods for the invoice number DC-INV-535 </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="3" className="border px-2 py-1">
                    <strong>INVOICE AMOUNT </strong>
                  </td>
                  <td colSpan="2" className="border px-2 py-1">
                    <p>699.00 </p>
                  </td>
                  <td colSpan="3" className="border px-2 py-1">
                    <p>CURRENCY : INR </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="8" className="border px-2 py-1">
                    Thank you for ordering at the Drugcarts online store.
                    <br />
                    If you have any questions, you can email us at the following
                    Phone No : +91 99206 11567
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        <button
          onClick={generatePDF}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
}
