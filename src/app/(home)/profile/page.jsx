'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import PersonIcon from '@mui/icons-material/Person';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SummarizeIcon from '@mui/icons-material/Summarize';
import ScienceIcon from '@mui/icons-material/Science';
import InterpreterModeIcon from '@mui/icons-material/InterpreterMode';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import TransgenderIcon from '@mui/icons-material/Transgender';
import TtyIcon from '@mui/icons-material/Tty';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import SourceIcon from '@mui/icons-material/Source';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import LogoutIcon from '@mui/icons-material/Logout';
import MyOrders from '@/components/profile/MyOrders';
import MyAddress from '@/components/profile/MyAddress';
import MyPrescription from '@/components/profile/MyPrescription';
import MyLab from '@/components/profile/MyLab';
import AddressForm from "@/components/common/AddressForm";
import { useDispatch, useSelector } from 'react-redux';
import { GetAddressIdService } from '@/services/addressService';

const tabs = [
    { id: 'profile', label: 'My Profile', icon: <PersonIcon /> },
    { id: 'orders', label: 'My Order', icon: <ListAltIcon /> },
    { id: 'address', label: 'My Address', icon: <LocationOnIcon /> },
    { id: 'prescription', label: 'My Prescription', icon: <SummarizeIcon /> }
];

const tabsdoctors = [
    { id: 'labtest', label: 'My Lab Test', icon: <ScienceIcon /> },
    { id: 'appointment', label: 'My Appointment', icon: <InterpreterModeIcon /> },
    { id: 'family', label: 'My Family', icon: <SettingsAccessibilityIcon /> },
    { id: 'healthrecords', label: 'Health Records', icon: <MonitorHeartIcon /> }
];
const tabssupport = [
    { id: 'social', label: 'Social Pages', icon: <TransgenderIcon /> },
    { id: 'contactus', label: 'Contact Us', icon: <TtyIcon /> },
    { id: 'aboutus', label: 'About Us', icon: <AnnouncementIcon /> },
    { id: 'faqs', label: 'FAQs', icon: <StickyNote2Icon /> },
    { id: 'feedback', label: 'Send Feedback', icon: <ThumbUpOffAltIcon /> }
];
const tabslegal = [
    { id: 'terms', label: 'Terms and Conditon', icon: <SourceIcon /> },
    { id: 'policy', label: 'Private Policy', icon: <AdminPanelSettingsIcon /> },
    { id: 'refund', label: 'Refund Policy', icon: <AgricultureIcon /> },
    { id: 'logout', label: 'Logout', icon: <LogoutIcon /> },
];

export default function ProfileTab() {
    const { profile } = useSelector((state) => state.profileData)
    const { userAddress } = useSelector((state) => state.addressData)
    const [activeTab, setActiveTab] = useState('profile');
    const [selected, setSelected] = useState('Home');
    const [edit, setEdit] = useState(false);
    const dispatch = useDispatch();


    console.log("userAddress", userAddress);

    return (
        <>
            {/* <section className="px-2 md:px-12 mt-3">
                <div className="flex flex-wrap items-center space-x-2 text-sm text-gray-500 ">
                    <Link href="#" className="hover:text-gray-700">Home</Link>
                    <span>&gt;</span>
                    <Link href="#" className="hover:text-gray-700">My Account</Link>
                </div>
            </section> */}
            <section className="px-2 md:px-12 mt-3">
                <div className="flex max-w-7xl mx-auto md:my-6">
                    {/* Sidebar Tabs */}
                    <div className="w-12 md:w-64 border-2 bg-white p-0 min-h-screen text-[14px]">
                        <ul className="space-y-0">
                            <li className='border-b-2 p-2 hidden md:block'>
                                <div className="flex items-center space-x-4">
                                    <div className="h-px w-full bg-gray-400"></div>
                                    <p className="text-gray-600 font-sans text-sm">Message</p>
                                    <div className="h-px w-full bg-gray-400"></div>
                                </div>
                            </li>
                            {tabs.map(tab => (
                                <li
                                    key={tab.id}
                                    className={`p-2 border-b-2 flex items-center gap-2 cursor-pointer ${activeTab === tab.id ? 'bg-pink-600 text-white' : ''}`}
                                    onClick={() => setActiveTab(tab.id)}
                                >
                                    {tab.icon} <span className='hidden md:block'>{tab.label}</span>
                                </li>
                            ))}
                        </ul>
                        <ul className="space-y-0">
                            <li className='border-b-2 p-2 hidden md:block'>
                                <div className="flex items-center space-x-4">
                                    <div className="h-px w-full bg-gray-400"></div>
                                    <p className="text-gray-600 font-sans text-sm">Doctors</p>
                                    <div className="h-px w-full bg-gray-400"></div>
                                </div>
                            </li>
                            {tabsdoctors.map(tab => (
                                <li
                                    key={tab.id}
                                    className={`p-2 border-b-2 flex items-center gap-2 cursor-pointer ${activeTab === tab.id ? 'bg-pink-600 text-white' : ''}`}
                                    onClick={() => setActiveTab(tab.id)}
                                >
                                    {tab.icon} <span className='hidden md:block'>{tab.label}</span>
                                </li>
                            ))}
                        </ul>
                        <ul className="space-y-0">
                            <li className='border-b-2 p-2 hidden md:block'>
                                <div className="flex items-center space-x-4">
                                    <div className="h-px w-full bg-gray-400"></div>
                                    <p className="text-gray-600 font-sans text-sm">Support</p>
                                    <div className="h-px w-full bg-gray-400"></div>
                                </div>
                            </li>
                            {tabssupport.map(tab => (
                                <li
                                    key={tab.id}
                                    className={`p-2 border-b-2 flex items-center gap-2 cursor-pointer ${activeTab === tab.id ? 'bg-pink-600 text-white' : ''}`}
                                    onClick={() => setActiveTab(tab.id)}
                                >
                                    {tab.icon} <span className='hidden md:block'>{tab.label}</span>
                                </li>
                            ))}
                        </ul>
                        <ul className="space-y-0">
                            <li className='border-b-2 p-2 hidden md:block'>
                                <div className="flex items-center space-x-4">
                                    <div className="h-px w-full bg-gray-400"></div>
                                    <p className="text-gray-600 font-sans text-sm">Legal</p>
                                    <div className="h-px w-full bg-gray-400"></div>
                                </div>
                            </li>
                            {tabslegal.map(tab => (
                                <li
                                    key={tab.id}
                                    className={`p-2 border-b-2 flex items-center gap-2 cursor-pointer ${activeTab === tab.id ? 'bg-pink-600 text-white' : ''}`}
                                    onClick={() => setActiveTab(tab.id)}
                                >
                                    {tab.icon} <span className='hidden md:block'>{tab.label}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 p-3 md:p-8">
                        {activeTab === 'profile' && (
                            <div>
                                <h2 className="text-2xl font-bold mb-4">My Account Information</h2>
                                {/* Personal Information */}
                                <div className="bg-white shadow-md p-6 rounded-lg mb-6">
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="text-lg font-semibold">Personal Information</h3>
                                        <button onClick={() => setEdit(!edit)} className="flex items-center gap-2">
                                            <EditLocationAltIcon /> {edit ? 'Cancel' : 'Edit'}
                                        </button>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <input type="text" placeholder="Full Name" value={profile?.username || ""} disabled={!edit} className="border p-2 rounded w-full" />
                                        <input type="text" placeholder="Mobile Number" value={profile?.phone || ""} disabled={true} className="border p-2 rounded w-full" />
                                        <input type="email" placeholder="E-Mail Address" disabled={!edit} className="border p-2 rounded w-full" />
                                        <input type="text" placeholder="Gender" disabled={!edit} className="border p-2 rounded w-full" />
                                        <input type="date" placeholder="Date of Birth" disabled={!edit} className="border p-2 rounded w-full" />
                                        <input type="text" placeholder="Blood Group" disabled={!edit} className="border p-2 rounded w-full" />
                                    </div>
                                </div>
                                {/* Address Details */}
                                <AddressForm />
                                {/* <div className="bg-white shadow-md p-6 rounded-lg">
                                    <div className="flex flex-wrap justify-between items-center mb-4">
                                        <h3 className="text-lg font-semibold">Address Details</h3>
                                        <button className="bg-green-500 text-white px-4 py-2 rounded">+ Add Address</button>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <input type="text" placeholder="Full Name" className="border p-2 rounded w-full" />
                                        <input type="text" placeholder="Mobile Number" className="border p-2 rounded w-full" />
                                        <textarea placeholder="Address 1" className="border p-2 rounded w-full md:col-span-2 h-32"></textarea>
                                        <input type="text" placeholder="Pincode" className="border p-2 rounded w-full" />
                                        <input type="text" placeholder="Landmark" className="border p-2 rounded w-full" />
                                        <input type="text" placeholder="City" className="border p-2 rounded w-full" />
                                        <input type="text" placeholder="State" className="border p-2 rounded w-full" />
                                    </div>
                                </div> */}
                                {/* <div className="bg-white shadow-md p-6 rounded-lg mt-4">
                                    <div className="flex flex-wrap items-center space-x-4 space-y-4">
                                        <span className="font-semibold">Type of Place</span>
                                        <div className="flex space-x-2">
                                            {['Home', 'Office', 'Others'].map((type) => (
                                                <button
                                                    key={type}
                                                    onClick={() => setSelected(type)}
                                                    className={`px-4 py-2 rounded-md font-medium transition-colors ${selected === type ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-700'
                                                        }`}
                                                >
                                                    {type}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex justify-end mt-4">
                                        <button className="px-6 py-2 bg-pink-700 justify-end items-end text-white font-semibold rounded-md">ADD</button>
                                    </div>
                                </div> */}
                            </div>
                        )}

                        {activeTab === 'orders' && (
                            <div>
                                <h2 className="text-2xl font-bold mb-4">My Orders</h2>
                                <p>Order details will be displayed here.</p>
                                <MyOrders />
                            </div>
                        )}

                        {activeTab === 'address' && (
                            <div>
                                <h2 className="text-2xl font-bold mb-4">My Address</h2>
                                <MyAddress />
                            </div>
                        )}

                        {activeTab === 'prescription' && (
                            <div>
                                <h2 className="text-2xl font-bold mb-4">My Prescription</h2>
                                <MyPrescription />
                            </div>
                        )}
                        {activeTab === 'labtest' && (
                            <div>
                                <MyLab />
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}
