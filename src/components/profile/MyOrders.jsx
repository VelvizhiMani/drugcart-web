'use client';
import { useState } from 'react';
import Brightness5Icon from '@mui/icons-material/Brightness5';



const MyOrders = () => {
    const [activeTab, setActiveTab] = useState("Ongoing");

    const [orders] = useState([
        { id: "001", name: "John Doe", status: "Ongoing", date: "2024-02-25", amount: "$120" },
        { id: "002", name: "Jane Smith", status: "Completed", date: "2024-02-24", amount: "$200" },
        { id: "003", name: "Michael Brown", status: "Ongoing", date: "2024-02-23", amount: "$150" },
    ]);

    return (
        <div className="p-2">
            {/* Buttons */}
            <div className="flex gap-2">
                <button className="bg-green-600 text-white px-4 py-2 rounded">All Order</button>
                {/* <button className="bg-gray-400 text-white px-4 py-2 rounded">Import Order</button> */}
            </div>

            {/* Tabs */}
            <div className="flex justify-between gap-4 mt-2">
                {/* Filters */}
                <div className="flex gap-4 mt-2">
                    {["Ongoing", "Completed", "All Orders"].map((tab) => (
                        <button
                            key={tab}
                            className={`px-4 py-2 ${activeTab === tab
                                ? "border-b-2 border-green-600 text-green-600"
                                : "text-gray-500"
                                }`}
                            onClick={() => setActiveTab(tab)}
                        >
                            <Brightness5Icon />   {tab}
                        </button>
                    ))}
                </div>
                {/* Date Filters */}
                <div className="flex gap-2 mt-4">
                    <input type="date" className="border px-2 py-1 rounded text-gray-500" />
                    <input type="date" className="border px-2 py-1 rounded text-gray-500" />
                </div>
            </div>

            {/* Order List */}
            <div className="mt-4 border p-6 rounded text-gray-600">
                Order for <strong>{activeTab}</strong>
                {activeTab && activeTab ? (
                    <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                        {/* Table Head */}
                        <thead className="bg-gray-100">
                            <tr className="text-left">
                                <th className="px-4 py-2 border">Order ID {activeTab}</th>
                                <th className="px-4 py-2 border">Customer</th>
                                <th className="px-4 py-2 border">Status</th>
                                <th className="px-4 py-2 border">Date</th>
                                <th className="px-4 py-2 border">Amount</th>
                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody>
                            {orders.map((order) => (
                                <tr key={order.id} className="border">
                                    <td className="px-4 py-2 border">{order.id}</td>
                                    <td className="px-4 py-2 border">{order.name}</td>
                                    <td
                                        className={`px-4 py-2 border font-medium ${order.status === "Completed" ? "text-green-600" : "text-orange-500"
                                            }`}
                                    >
                                        {order.status}
                                    </td>
                                    <td className="px-4 py-2 border">{order.date}</td>
                                    <td className="px-4 py-2 border">{order.amount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                ): ''}
                
            </div>
        </div>
    )
}

export default MyOrders;