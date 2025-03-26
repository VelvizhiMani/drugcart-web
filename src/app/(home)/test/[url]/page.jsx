"use client";
import { IMAGES } from '@/components/common/images';
import Image from 'next/image';
import { useState } from "react";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const options = [
    { id: "fastingbloodsugar", label: "Fasting Blood Sugar(FBS) @ Rs. 149 / Person" },
    { id: "crptest", label: "CRP Test @ Rs. 400 / Person" },
    { id: "esrtest", label: "ESR Test @ Rs. 200 / Person" },
    { id: "covid", label: "Covid Antibody IgG @ Rs. 390 / Person" },
    { id: "urineanalysis", label: "Complete Urine Analysis @ Rs. 300 / Person" },
    { id: "heartattach", label: "Troponin - Heart Attack Risk Test (ACTNI) @ Rs. 500/Person" },
];

const faqs = [
    {
        question: "What full body checkup includes?",
        answer: `A Correct prescription has the following information:
      - Name and address of the Doctor
      - Doctor's stamp or signature
      - Patient name and age
      - Date of visit or date of the prescription
      - Name of medicine, dosage, strength and duration for which it is required and direction to take the medicine`,
    },
    {
        question: "How much blood is required for full body test?",
        answer: "You can upload your prescription, and our experts will assist you in placing your order.",
    },
    {
        question: "How important is full body checkup?",
        answer: "Uploading a prescription ensures that the medicines are prescribed by a qualified doctor.",
    },
    {
        question: "How do I prepare for a full body checkup?",
        answer: "You can upload your prescription, and our experts will assist you in placing your order.",
    },
    {
        question: "Can we eat anything before full body checkup?",
        answer: "Uploading a prescription ensures that the medicines are prescribed by a qualified doctor.",
    },
    {
        question: "What is a 12 hour fast for blood test?",
        answer: "You can upload your prescription, and our experts will assist you in placing your order.",
    },
    {
        question: "How do I prepare for a full body checkup?",
        answer: "Uploading a prescription ensures that the medicines are prescribed by a qualified doctor.",
    },
    {
        question: "How do I prepare for a full body checkup?",
        answer: "Uploading a prescription ensures that the medicines are prescribed by a qualified doctor.",
    },
]

const LabTestDetail = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [selected, setSelected] = useState([]);
    const [openIndex, setOpenIndex] = useState(0);

    const handleCheckboxChange = (id) => {
        setSelected((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };
    return (
        <section className="max-w-7xl mx-auto mt-3">
            <div className='flex flex-wrap m-2 p-2'>
                <div className='w-full md:w-4/6 border-[1.5px] p-2'>
                    <div className='flex justify-between p-2'>
                        <div>
                            <div className='flex flex-wrap'>
                                <div className='w-full md:w-[80%]'> 
                                    <h2 className="text-md md:text-xl font-bold">Full Body Checkup (Aarogyam 1.2.Package) from Thyrocare</h2>
                                    <p>The joy of healthy living comes with good health and proper care. Book your popular test package today</p>
                                </div>
                                <div className='w-full md:w-[20%]'>
                                    <div className="flex">
                                        <span className="text-black text-lg font-bold mr-2">4.0</span>
                                        <span className="text-yellow-500 text-lg">&#9733;</span>
                                        <span className="text-yellow-500 text-lg">&#9733;</span>
                                        <span className="text-yellow-500 text-lg">&#9733;</span>
                                        <span className="text-yellow-500 text-lg">&#9733;</span>
                                        <span className="text-gray-300 text-lg">&#9733;</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center mt-2 space-x-3 md:space-x-6">
                                <p className="text-red-600 text-xl font-bold ">Price 1440</p>
                                <p className="text-blue-400 text-sm line-through">M.R.P <span className="text-blue-600 font-bold">1800.00</span></p>
                                <p className="text-green-600 text-sm font-medium">You Save $360.00</p>
                            </div>
                            <p className="text-blue-900 border-[1.5px] p-1 w-full md:w-[30%] text-sm my-2 font-bold ">You Save : Rs. 360</p>
                            <p className='text-[red] font-bold'><span className='text-black'>Sample Type : </span>Blood,Urine <br /> 10- 12 hours Fasting. Water Allowed.</p>
                            <p className='text-md my-4'>Aarogyam 1.2 package is a full-body health check-up package contains 83 tests including Cardiac risk markers, Complete hemogram, Diabetes, Iron deficiency, Lipid, Liver, Renal, Thyroid, Toxic elements. This package is suitable for people 30 years and above.</p>
                            <h3 className='mt-2 font-bold text-md text-blue-600'>List of Tests Included:</h3>
                            <h3 className='mt-2 font-bold text-md bg-[#35ac44] text-white p-2'>Lab Description</h3>
                            <p className='text-md my-4'>Thyrocare Technologies Limited is an Indian multinational chain of diagnostic and preventive care laboratories, headquartered in Navi Mumbai, Maharashtra. The company has a total of 1,122 outlets and collection centres across India and parts of Nepal, Bangladesh and the Middle East</p>
                            <h3 className='mt-2 font-bold text-md bg-[#35ac44] text-white p-2'>Test Requirement</h3>
                            <h3 className='mt-2 font-bold text-md bg-[#35ac44] text-white p-2'>Lab Includes</h3>
                            <p><strong>IRON DEFICIENCY - 3 Test&nbsp;</strong>
                                <ul>
                                    <li>% TRANSFERRIN SATURATION</li>
                                    <li>IRON</li>
                                    <li>TOTAL IRON BINDING CAPACITY (TIBC)</li>
                                </ul>

                                <p><strong>LIVER&nbsp; - 11 Test&nbsp;</strong></p>

                                <ul>
                                    <li>SERUM ALB/GLOBULIN RATIO</li>
                                    <li>ALKALINE PHOSPHATASE</li>
                                    <li>BILIRUBIN -DIRECT</li>
                                    <li>BILIRUBIN (INDIRECT)</li>
                                    <li>BILIRUBIN - TOTAL</li>
                                    <li>GAMMA-GLUTAMYL TRANSFERASE (GGT)</li>
                                    <li>PROTEIN - TOTAL</li>
                                    <li>ALBUMIN - SERUM</li>
                                    <li>SERUM GLOBULIN</li>
                                    <li>ASPARTATE AMINOTRANSFERASE (SGOT )</li>
                                    <li>ALANINE TRANSAMINASE (SGPT)</li>
                                </ul>
                            </p>
                            <h3 className='mt-2 font-bold text-md bg-[#35ac44] text-white p-2'>Report Timing</h3>
                            <h3 className='mt-2 font-bold text-md bg-[#35ac44] text-white p-2'>Booking Procedure</h3>
                            <p><ol>
                                <li>Fill the Booking form with your Full Name,Address,City,State,Pincode,Mobile Number and Email ID</li>
                                <li>Thyrocare Technologies Limited agent will call you and fix the appointment for sample collection</li>
                                <li>Sample will be collected as per the address given at the time of booking</li>
                                <li>Pay at the time of sample collection</li>
                                <li>Details of report will be emailed to you within 24-48hours as per the email address given while booking</li>
                            </ol>
                            </p>
                            <h3 className='mt-2 font-bold text-md bg-[#35ac44] text-white p-2'>Note</h3>
                            <p>We are authorized sales partner of Thyrocare Technologies Limited.We will book the orders and send to Thyrocare for sample collection at home,Testing the samples,Report Generation and Payment collections.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-2/6 border-[1.5px] p-2'>
                    <h4 className="bg-[#0082c8] p-2 text-white">Thyrocare Aarogyam 1.2.Package</h4>
                    <h4 className='font-bold my-2'>Book Now, Pay Later </h4>
                    <p>You will get a payment link at the time of sample collection. CASH payment option is NOT available at present scenario. You can also make the payment by <b>Scan QR code</b> at the time of collection.</p>
                    <label>Number of Persons</label>
                    <select name="noofperson" className="border p-2 rounded w-full my-2">
                        <option value="">--Please choose an option--</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <input type="text" placeholder="Beneficiary Name 1" className="border p-2 rounded w-full my-2" />
                    <div className='flex gap-1'>
                        <select name="gender1" className="border p-2 rounded w-full my-2">
                            <option value="">--Please Gender--</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        <input type="text" placeholder="Age" className="border p-2 rounded w-full my-2" />
                    </div>
                    <input type="text" placeholder="Beneficiary Name 2" className="border p-2 rounded w-full my-2" />
                    <div className='flex gap-1'>
                        <select name="gender2" className="border p-2 rounded w-full my-2">
                            <option value="">--Please Gender--</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        <input type="text" placeholder="Age" className="border p-2 rounded w-full my-2" />
                    </div>
                    <input type="text" placeholder="Email" className="border p-2 rounded w-full my-2" />
                    <input type="text" placeholder="Mobile(Indian Number Only)" className="border p-2 rounded w-full my-2" />
                    <input type="date" placeholder="Appoinment Date" className="border p-2 rounded w-full my-2" />
                    <input type="text" placeholder="Slot Time" className="border p-2 rounded w-full my-2" />
                    <input type="text" placeholder="City" className="border p-2 rounded w-full my-2" />
                    <input type="text" placeholder="State" className="border p-2 rounded w-full my-2" />
                    <textarea placeholder="Complete Address" className="border p-2 rounded w-full md:col-span-2 h-32 my-2"></textarea>
                    <p className='font-bold text-sm my-2'>Order with incomplete/invalid address will be rejected.</p>
                    <h2 className='font-bold text-md'>Tick To Add Additional Tests(Optional)</h2>

                    <div className="justify-center items-center text-md">
                        {options.map((option) => (
                            <label key={option.id} className="flex font-bold items-center space-x-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="hidden"
                                    checked={selected.includes(option.id)}
                                    onChange={() => handleCheckboxChange(option.id)}
                                />

                                {/* Custom Checkbox */}
                                <div
                                    className={`w-4 h-4 flex items-center justify-center border-2 rounded-md  my-2 transition-all ${selected.includes(option.id) ? "bg-blue-500 border-blue-500" : "border-gray-400"
                                        }`}
                                >
                                    {selected.includes(option.id) && (
                                        <svg
                                            className="w-4 h-4 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    )}
                                </div>

                                <span className="text-gray-800 text-xs my-2">{option.label}</span>
                            </label>
                        ))}
                    </div>
                    <hr className='my-4' />
                    <div className="flex items-center space-x-2">
                        <input
                            id="checkbox"
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => setIsChecked(!isChecked)}
                            className="w-4 h-4 ml-2 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="checkbox" className="text-gray-800 text-xs my-2 font-bold">
                            Please Tick To Receive Hard Copy Report,Courier Charges Rs. 75 Extra
                        </label>
                    </div>
                    <h2 className='font-bold text-[14px] my-2 text-[blue]'>Test/Package Price: Rs.1440</h2>
                    <h2 className='font-bold text-md my-2 text-[green]'>Home Collection Charge: Rs. 0</h2>
                    <h2 className='font-bold text-md text-[red]'>Total Amount: Rs.: 1440</h2>
                    <button class="px-4 py-2 my-4 flex mx-auto bg-[#B7084B] text-white rounded-lg hover:bg-blue-700">
                        Book Now
                    </button>
                </div>
            </div>
            <div className='flex flex-wrap'>
                <div className='w-full md:w-2/3 p-2'>
                    <div className=" bg-white p-2 rounded-lg shadow-md">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border-b">
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className={`flex justify-between w-full p-4 text-left text-lg font-medium focus:outline-none ${openIndex === index ? "bg-green-600 text-white" : "bg-gray-100 text-gray-800"
                                        }`}
                                >
                                    {faq.question}
                                    {openIndex === index ? (
                                        <ArrowUpwardIcon className="w-6 h-6" />
                                    ) : (
                                        <ArrowDownwardIcon className="w-6 h-6" />
                                    )}
                                </button>

                                {openIndex === index && (
                                    <div className="p-4 text-gray-600 bg-white">{faq.answer}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className='w-full md:w-1/3 border-[1.5px] p-2'>
                    <h3 className='font-bold text-md'>Our Shop Category of Tests</h3>
                    <div className='flex justify-center items-center mt-4 border-[1.5px]'>
                        <div className='w-[30%]'>
                            <Image
                                priority
                                src={IMAGES.DIABETESICON}
                                alt="Ayush Banner"
                                className="w-16 h-16 mx-auto"
                            /></div>
                        <div className='w-[70%]'>
                            <h3 className='font-bold'>Diabetes</h3>
                        </div>
                    </div>
                    <div className='flex justify-center items-center mt-4 border-[1.5px]'>
                        <div className='w-[30%]'>
                            <Image
                                priority
                                src={IMAGES.HEMOGRAMICON}
                                alt="Ayush Banner"
                                className="w-16 h-16 mx-auto"
                            /></div>
                        <div className='w-[70%]'>
                            <h3 className='font-bold'>Complete Hemogram</h3>
                        </div>
                    </div>
                    <div className='flex justify-center items-center mt-4 border-[1.5px]'>
                        <div className='w-[30%]'>
                            <Image
                                priority
                                src={IMAGES.THYROIDICON}
                                alt="Ayush Banner"
                                className="w-16 h-16 mx-auto"
                            /></div>
                        <div className='w-[70%]'>
                            <h3 className='font-bold'>Thyroid Test</h3>
                        </div>
                    </div>
                    <div className='flex justify-center items-center mt-4 border-[1.5px]'>
                        <div className='w-[30%]'>
                            <Image
                                priority
                                src={IMAGES.LIPIDICON}
                                alt="Ayush Banner"
                                className="w-16 h-16 mx-auto"
                            /></div>
                        <div className='w-[70%]'>
                            <h3 className='font-bold'>Lipid Profile</h3>
                        </div>
                    </div>
                    <div className='flex justify-center items-center mt-4 border-[1.5px]'>
                        <div className='w-[30%]'>
                            <Image
                                priority
                                src={IMAGES.LIVERICON}
                                alt="Ayush Banner"
                                className="w-16 h-16 mx-auto"
                            /></div>
                        <div className='w-[70%]'>
                            <h3 className='font-bold'>Liver Profile</h3>
                        </div>
                    </div>
                    <div className='flex justify-center items-center mt-4 border-[1.5px]'>
                        <div className='w-[30%]'>
                            <Image
                                priority
                                src={IMAGES.KIDNEYICON}
                                alt="Ayush Banner"
                                className="w-16 h-16 mx-auto"
                            /></div>
                        <div className='w-[70%]'>
                            <h3 className='font-bold'>Kidney Function Test</h3>
                        </div>
                    </div>
                    <div className='flex justify-center items-center mt-4 border-[1.5px]'>
                        <div className='w-[30%]'>
                            <Image
                                priority
                                src={IMAGES.VITAMINICON}
                                alt="Ayush Banner"
                                className="w-16 h-16 mx-auto"
                            /></div>
                        <div className='w-[70%]'>
                            <h3 className='font-bold'>Vitamin Test</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LabTestDetail;