"use client";

import { useState } from "react";
import { useParams } from "next/navigation";

export default function OrderViewPage() {
    const { orderId } = useParams();
    const [status, setStatus] = useState("Processing");

    const order = {
        id: orderId,
        date: "2025-05-03",
        total: 149.99,
        status,
        customer: {
            name: "Velvizhi",
            email: "vel@gmail.com",
            address: "123 Main St, Springfield",
        },
        products: [
            { name: "Product A", quantity: 2, price: 49.99 },
            { name: "Product B", quantity: 1, price: 49.99 },
        ],
    };

    return (
        <div className="max-w-5xl mx-auto p-6 space-y-6">
            <div className="flex justify-end gap-4">
                <button className="bg-red-600 text-white font-semibold py-2 px-4 rounded hover:bg-red-700 shadow">
                    Cancel Order
                </button>
            </div>
            <h1 className="text-3xl font-bold">Order #{order.id}</h1>
            {/* Order Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white border rounded-xl p-2 shadow">
                <div>
                    <p className="font-medium">
                        <span className="font-bold">Order Date : </span>
                        {order.date}
                    </p>
                    <p className="font-medium">
                        <span className="font-bold">Total Price :</span> Rs. 135
                    </p>
                    <p className="font-medium">
                        <span className="font-bold">Shipping Price :</span> 0
                    </p>
                    <p className="font-medium">
                        <span className="font-bold">Tracking No :</span> FSRER34334DFGH
                    </p>
                    <p className="font-medium">
                        <span className="font-bold">Order Status :</span> {order.date}
                    </p>
                    <button className="bg-blue-500 text-white font-semibold py-2 mt-3 px-4 rounded hover:bg-blue-600 shadow">
                        Payment Pending
                    </button>
                </div>
                <div>
                    <p className="text-[black] font-bold">Customer Info</p>
                    <p>Velvizhi M</p>
                    <p>velvizhimcapec@gmail.com</p>
                    <p>8056800773</p>
                    <p>No. 105, Vinayagar Street,</p>
                    <p>Royapuram & post,</p>
                    <p>Parry, Chennai, Tamilnadu, India,</p>
                </div>
            </div>

            {/* Product Table */}
            <div className="bg-white border rounded-xl shadow overflow-x-auto">
                <table className="min-w-full text-sm text-left">
                    <thead className="bg-gray-100 text-gray-700">
                        <tr>
                            <th className="px-4 py-3">Product</th>
                            <th className="px-4 py-3">Quantity</th>
                            <th className="px-4 py-3">Unit Price</th>
                            <th className="px-4 py-3">Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {order.products.map((product, index) => (
                            <tr key={index} className="border-t">
                                <td className="px-4 py-3">{product.name}</td>
                                <td className="px-4 py-3">{product.quantity}</td>
                                <td className="px-4 py-3">${product.price.toFixed(2)}</td>
                                <td className="px-4 py-3">
                                    ${(product.price * product.quantity).toFixed(2)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr className="border-t font-bold">
                            <td className="px-4 py-3 text-right" colSpan="3">
                                Total
                            </td>
                            <td className="px-4 py-3">${order.total.toFixed(2)}</td>
                        </tr>
                        <tr className="border-t font-bold">
                            <td className="px-4 py-3 text-right" colSpan="3">
                                Shipping Price
                            </td>
                            <td className="px-4 py-3">${order.total.toFixed(2)}</td>
                        </tr>
                        <tr className="border-t font-bold">
                            <td className="px-4 py-3 text-right" colSpan="3">
                                Total Amount
                            </td>
                            <td className="px-4 py-3">${order.total.toFixed(2)}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}
