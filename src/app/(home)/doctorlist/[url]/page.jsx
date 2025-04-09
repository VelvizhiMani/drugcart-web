'use client';
import { GetSpecialUrlService } from '@/services/specialityService';
import { GetDoctorUrlService } from '@/services/doctorService';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const DoctorPage = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const router = useRouter()
    const { specialUrl } = useSelector((state) => state.specialityData)
    const { doctorUrl } = useSelector((state) => state.doctorData)
    const { profile } = useSelector((state) => state.profileData);

    useEffect(() => {
        dispatch(GetSpecialUrlService(params.url))
        dispatch(GetDoctorUrlService(params.url))
    }, [params.url])

    const handleClick = (path) => {
        if (Object.values(profile).length !== 0) {
            router.push(`/call-doctor/${path}`)
        } else {
            router.push(`/login`)
        }
    }

    const handleOnlineClick = () => {
        if (Object.values(profile).length !== 0) {
            router.push(`/ask-doctor`)
        } else {
            router.push(`/login`)
        }
    }

    return (
        <div className="p-4">
            <h2 className="text-xl font-semibol p-4 mb-6 shadow rounded-md">
                {specialUrl?.specialty_name} Doctor List
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                    {doctorUrl && doctorUrl.map((doctor, i) => (
                        <div className="bg-white shadow p-4 rounded-md mb-6" key={i}>
                            <div className="flex gap-4">
                                <img src="https://assets3.drugcarts.com/colors/doctor-icon.png" alt="doctor" className="w-20 h-20" />
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold">{doctor?.doctor_name}</h3>
                                    <p><strong>Specialist:</strong> {doctor?.specialist_name}</p>
                                    <p><strong>Qualification:</strong> {doctor?.qualification || '-'}</p>
                                    <p><strong>City:</strong> {doctor?.city || '-'}</p>
                                    {doctor?.experience && (
                                        <p className="flex items-center gap-1">
                                            🎓 {doctor?.experience}
                                        </p>
                                    )}
                                    {doctor.language && (
                                        <p><strong>Language:</strong> {doctor?.language}</p>
                                    )}
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                                <button className="bg-[#B7084B] text-white py-2 rounded" onClick={() => handleClick(doctor?.url)}>Call Doctor</button>
                                <button className="bg-[#B7084B] text-white py-2 rounded" onClick={() => handleOnlineClick()}>Consult Online</button>
                                <button className="bg-[#B7084B] text-white py-2 rounded">Book Appointment</button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-gray-100 shadow rounded-md p-4">
                    <h3 className="text-lg font-semibold mb-4">Have any Question?</h3>
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full border p-2 rounded"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full border p-2 rounded"
                        />
                        <input
                            type="text"
                            placeholder="Contact No."
                            className="w-full border p-2 rounded"
                        />
                        <textarea
                            rows={4}
                            placeholder="Question"
                            className="w-full border p-2 rounded"
                        />
                        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DoctorPage;
