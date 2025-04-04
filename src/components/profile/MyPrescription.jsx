import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetPrescriptionIdService, GetPrescriptionService, DeletePrescriptionService } from '@/services/prescriptionService'
import Image from "next/image";
import { IMAGES } from "@/components/common/images";
import CloseIcon from '@mui/icons-material/Close';
import DeleteModal from '../admin/modal/DeleteModal';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

function MyPrescription() {
    const [selectedAddressId, setSelectedAddressId] = useState(null);
    const { prescriptionList, prescription } = useSelector((state) => state.prescriptionData)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetPrescriptionService())
    }, [])

    return (
        <div className="p-4">
            <div className=" grid grid-cols-2 md:grid-cols-5 gap-5 relative w-full h-64 mb-4">
                {prescriptionList && prescriptionList?.map((item, i) => (
                    <div className='flex relative' key={i}>
                        <img
                            onClick={() => {
                                dispatch(GetPrescriptionIdService(item?._id))
                                window.open(item?.rximage, '_blank')
                            }}
                            key={i}
                            src={item?.rximage ? item?.rximage : IMAGES.PRESCRIPTIONSAVE}
                            alt="Uploaded Image"
                            // layout="fill"
                            // objectFit="cover"
                            className={`rounded-md w-24 h-24 border-2 cursor-pointer ${item?._id === prescription?._id ? "border-[#B7084B]" : null} mb-3`}
                            width={200}
                            height={200}
                        />
                        <HighlightOffIcon className='cursor-pointer mx-1' color="action" onClick={() => setSelectedAddressId(item._id)} />
                        <DeleteModal
                            open={selectedAddressId === item?._id}
                            setOpen={() => setSelectedAddressId(null)}
                            title={"Delete Prescription"}
                            description={`Are you sure you want to delete ${i + 1} ?`}
                            onSubmit={async () => {
                                await dispatch(DeletePrescriptionService(item?._id));
                                setSelectedAddressId(null);
                            }}
                        />
                    </div>
                ))}
            </div>
            {prescriptionList?.length === 0 && <p className="text-gray-500">No Prescription uploaded</p>}
        </div>
    )
}

export default MyPrescription