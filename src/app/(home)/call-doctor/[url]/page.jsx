'use client';
import { useState } from 'react';

const CallDoctor = () => {
    const [visitReason, setVisitReason] = useState('');
    const [paymentOption, setPaymentOption] = useState('');

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <div className="bg-white rounded shadow p-6 max-w-3xl mx-auto">
                <h2 className="text-lg font-semibold mb-4">
                    This call is for in-person appointment related enquiries. What’s the reason for your in-person visit?
                </h2>
                <div className="space-y-2 mb-4">
                    {['Consultation', 'Follow up'].map(option => (
                        <label key={option} className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="visitReason"
                                value={option}
                                checked={visitReason === option}
                                onChange={() => setVisitReason(option)}
                            />
                            {option}
                        </label>
                    ))}
                </div>

                <div className="text-center font-medium text-gray-600 my-4">OR</div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                    {[
                        'Abnormal Behavior Treatment',
                        'ADHD Counselling',
                        'Adult Treatment',
                        'Anger Management',
                        'Autism Treatment',
                        'Stress Treatment',
                    ].map(option => (
                        <label key={option} className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="visitReason"
                                value={option}
                                checked={visitReason === option}
                                onChange={() => setVisitReason(option)}
                            />
                            {option}
                        </label>
                    ))}
                </div>

                <div className="border-t pt-4 mt-6">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold">PAYMENT OPTIONS (Choose Any One)</span>
                        <span className="text-sm">Amount Payable: <strong>₹350</strong></span>
                    </div>

                    <div className="space-y-2">
                        {[
                            'Credit Card/ Debit Card/ Netbanking/ via [Pay U Money]',
                            'UPI [Google Pay, Phone pe]',
                        ].map(option => (
                            <label key={option} className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="paymentOption"
                                    value={option}
                                    checked={paymentOption === option}
                                    onChange={() => setPaymentOption(option)}
                                />
                                {option}
                            </label>
                        ))}
                    </div>
                </div>

                <div className="text-right mt-6">
                    <button
                        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
                        disabled={!visitReason || !paymentOption}
                    >
                        Proceed to Payment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CallDoctor;
