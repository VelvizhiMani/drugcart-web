"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { GetOrderOneService } from '@/services/orderService';
import { useSelector, useDispatch } from "react-redux";

export default function OrderViewPage() {
    const { orderGetData } = useSelector((state) => state.orderData)
    const router = useRouter()
    const { orderId } = useParams();
    const [status, setStatus] = useState("Processing");
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetOrderOneService(orderId))
    }, [orderId])
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
                        <span className="font-bold">Total Price :</span> Rs. {orderGetData?.totalPrice}
                    </p>
                    <p className="font-medium">
                        <span className="font-bold">Shipping Price :</span> {orderGetData?.shippingPrice}
                    </p>
                    <p className="font-medium">
                        <span className="font-bold">Tracking No :</span> {orderGetData?.trackingInfo?.trackingno ? orderGetData?.trackingInfo?.trackingno : "Not Found"}
                    </p>
                    <p className="font-medium">
                        <span className="font-bold">Order Status :</span> {orderGetData?.trackingInfo?.orderStatus}
                    </p>
                    <div className="font-medium flex">
                        <span className="font-bold">Invoice :</span> <p className="text-blue-600 cursor-pointer ml-1 font-medium" onClick={() => router.push(`/invoice/${orderGetData?.orderId}`)}>View more</p>
                    </div>
                    <button className="bg-blue-500 text-white font-semibold py-2 mt-3 px-4 rounded hover:bg-blue-600 shadow">
                        Payment Pending
                    </button>
                </div>
                <div>
                    <p className="text-[black] font-bold">Customer Info</p>
                    <p>{orderGetData?.shippingInfo?.cus_name}{" "}{orderGetData?.shippingInfo?.lastname}</p>
                    <p>{orderGetData?.shippingInfo?.email}</p>
                    <p>{orderGetData?.shippingInfo?.phone}</p>
                    <p>{orderGetData?.shippingInfo?.address}</p>
                    <p>{orderGetData?.shippingInfo?.state}</p>
                    <p>{orderGetData?.shippingInfo?.country}</p>
                    <p>{orderGetData?.shippingInfo?.postcode}</p>
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
                        {orderGetData?.orderItems?.map((product, index) => (
                            <tr key={index} className="border-t">
                                <td className="px-4 py-3">{product?.product_name}</td>
                                <td className="px-4 py-3">{product?.quantity}</td>
                                <td className="px-4 py-3">${product?.price}</td>
                                <td className="px-4 py-3">
                                    ${(product?.price * product?.quantity)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr className="border-t font-bold">
                            <td className="px-4 py-3 text-right" colSpan="3">
                                Total
                            </td>
                            <td className="px-4 py-3">₹{orderGetData?.totalPrice}</td>
                        </tr>
                        <tr className="border-t font-bold">
                            <td className="px-4 py-3 text-right" colSpan="3">
                                Shipping Price
                            </td>
                            <td className="px-4 py-3">₹{orderGetData?.shippingPrice}</td>
                        </tr>
                        <tr className="border-t font-bold">
                            <td className="px-4 py-3 text-right" colSpan="3">
                                Total Amount
                            </td>
                            <td className="px-4 py-3">₹{orderGetData?.totalPrice}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}
