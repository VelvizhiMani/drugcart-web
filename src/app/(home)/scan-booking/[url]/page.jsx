import React from 'react'

const ScanBooking = () => {
    return (
        <section className="max-w-7xl mt-3 mx-auto">
            <div className='bg-[#eee] p-3 text-[#B7084B] font-bold text-xl text-center'>
                <h1>Book Your Test</h1>
            </div>
            <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
                <div className="grid grid-cols-2 gap-4">
                    <select className="w-full p-2 border rounded-md">
                        <option>Select Service</option>
                        <option>PET Scan</option>
                        <option>MRI Scan</option>
                        <option>USG Scan</option>
                        <option>CT Scan</option>
                        <option>X-Ray Scan</option>
                        <option>Stress Test</option>
                        <option>ECG Test</option>
                    </select>
                    <select className="w-full p-2 border rounded-md">
                        <option>Select City</option>
                        <option>Select City 1</option>
                        <option>Select City 2</option>
                        <option>Select City 3</option>
                    </select>
                    <select className="w-full p-2 border rounded-md">
                        <option>Select Centre</option>
                        <option>Select Centre 1</option>
                        <option>Select Centre 2</option>
                        <option>Select Centre 3</option>
                    </select>
                    <select className="w-full p-2 border rounded-md">
                        <option>Select Test</option>
                        <option>PET Scan @6000</option>
                        <option>CT Scan @7000</option>
                        <option>MRI @8000</option>
                    </select>
                </div>

                <textarea
                    className="w-full p-2 border rounded-md mt-4"
                    placeholder="Address"
                    rows="2"
                ></textarea>

                <div className="grid grid-cols-2 gap-4 mt-4">
                    <input
                        type="text"
                        className="w-full p-2 border rounded-md"
                        placeholder="Name"
                    />
                    <input
                        type="text"
                        className="w-full p-2 border rounded-md"
                        placeholder="Phone"
                    />
                    <input
                        type="email"
                        className="w-full p-2 border rounded-md"
                        placeholder="E-Mail"
                    />
                    <input
                        type="date"
                        className="w-full p-2 border rounded-md"
                        placeholder="Appointment date"
                    />
                </div>

                <textarea
                    className="w-full p-2 border rounded-md mt-4"
                    placeholder="Enter your Subject"
                    rows="4"
                ></textarea>

                <button className="w-full bg-green-600 text-white py-2 rounded-md mt-4 hover:bg-green-700">
                    Submit
                </button>
            </div>
        </section>
    )
}

export default ScanBooking