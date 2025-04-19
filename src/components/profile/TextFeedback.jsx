import React from 'react'
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";

function TextFeedback() {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            cus_name: "",
            type: "Home",
            lastname: "",
            email: "",
            lastname: "",
            phone: "",
            address: "",
            postcode: "",
            state: "",
            country: "",
            town: "",
        },
        onSubmit: async (data, { resetForm }) => {
            console.log(data);
            // await dispatch(PostAddressService(data, resetForm))
        },
    });
    return (
        <div>
            <h3 className="text-md font-semibold mb-2">Text Feedback (Get 2% extra discount on next order)</h3>
            <textarea
                placeholder=""
                className="border p-2 rounded w-full h-80"
                value={formik.values.address}
                onChange={formik.handleChange("address")}
                required
            />
        </div>
    )
}

export default TextFeedback