"use client"
import React from 'react'

function AskOnlinePage() {
    return (
        <div>
            <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
                <div className="bg-white shadow-lg rounded-lg w-full max-w-5xl p-6 space-y-6">
                    {/* Doctor Profile */}
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                        <div className="">
                        <img src="https://assets3.drugcarts.com/colors/doctor-icon.png" alt="doctor" className="w-24 h-24" />
                        </div>
                        <div className="flex-1">
                            <h2 className="font-bold text-lg">Dr. Manish</h2>
                            <p><span className="font-medium">Specialist:</span> Surgery</p>
                            <p><span className="font-medium">Qualification:</span> MBBS, M.S (General Surgeon)</p>
                            <p><span className="font-medium">Experience:</span> Gujarat, Udwada</p>
                        </div>
                        <div className="text-sm text-gray-600">
                            <p>🎓 3 year</p>
                            <p><span className="font-medium">Language:</span> English, Gujarati, Hindi</p>
                        </div>
                    </div>

                    {/* Info Prompt */}
                    <div className="bg-gray-50 p-4 rounded text-center text-sm text-gray-700 border">
                        <p className="font-semibold">Please share some basic info about yourself:</p>
                        <p className="text-xs">(Required as per medical guidelines and visible only to the doctor)</p>
                    </div>

                    {/* Form */}
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-3 gap-4">
                            <div>
                                <label className="text-sm font-medium block">Name</label>
                                <input type="text" className="ask-input" />
                            </div>
                            <div>
                                <label className="text-sm font-medium block">Age</label>
                                <input type="number" className="ask-input" />
                            </div>
                            <div>
                                <label className="text-sm font-medium block">Gender</label>
                                <input type="text" className="ask-input" />
                            </div>
                        </div>

                        <div>
                            <label className="text-sm font-medium block">Describe the purpose of the consultation in detail:</label>
                            <textarea className="input h-20" />
                        </div>

                        <div className="grid md:grid-cols-3 gap-4">
                            <div>
                                <label className="text-sm font-medium block">City</label>
                                <input type="text" className="ask-input" />
                            </div>
                            <div>
                                <label className="text-sm font-medium block">Weight</label>
                                <input type="text" className="ask-input" />
                            </div>
                            <div>
                                <label className="text-sm font-medium block">Height</label>
                                <input type="text" className="ask-input" />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm font-medium block">Do you take any medication?</label>
                                <input type="text" className="ask-input" />
                            </div>
                            <div>
                                <label className="text-sm font-medium block">Do you have any allergies?</label>
                                <input type="text" className="ask-input" />
                            </div>
                        </div>

                        <div>
                            <label className="text-sm font-medium block">Do you have any previously diagnosed conditions?</label>
                            <input type="text" className="ask-input" />
                        </div>

                        {/* Consultation Summary */}
                        <div className="text-center text-sm font-semibold border-t pt-4">CONSULTATION SUMMARY</div>

                        <div className="text-right space-y-1 text-sm">
                            <p>Online Consultation Fee: <strong>INR 300/-</strong></p>
                            <p>Internet Handling Fee: <strong>INR 0.00</strong></p>
                            <p>Amount Payable: <strong>INR 300/-</strong></p>
                        </div>

                        {/* Payment Options */}
                        <div className="text-center font-semibold pt-4">PAYMENT OPTIONS (Choose Any One)</div>
                        <div className="flex flex-col md:flex-row gap-4">
                            <label className="flex items-center space-x-2">
                                <input type="radio" name="payment" />
                                <span>Credit/Debit/NetBanking (Pay U Money)</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="radio" name="payment" />
                                <span>UPI (Google Pay, PhonePe)</span>
                            </label>
                        </div>

                        <div className="text-right">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
                                Proceed to Payment
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    )
}

export default AskOnlinePage