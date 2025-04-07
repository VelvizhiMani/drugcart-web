import mongoose, { Schema } from "mongoose";

const doctorSchema = new Schema(
    {
        userId: {
            type: mongoose.Schema.ObjectId,
            default: ""
        },
        specialist_name: {
            type: String,
            required: true
        },
        doctor_name: {
            type: String,
            defalut: ""
        },
        url: {
            type: String,
            defalut: ""
        },
        picture: {
            type: String,
            defalut: ""
        },
        imagealt: {
            type: String,
            defalut: ""
        },
        doctor_no: {
            type: String,
            defalut: ""
        },
        gender: {
            type: String,
            defalut: ""
        },
        email: {
            type: String,
            defalut: ""
        },
        phone: {
            type: String,
            defalut: ""
        },
        language: {
            type: String,
            defalut: ""
        },
        experience: {
            type: String,
            defalut: ""
        },
        qualification: {
            type: String,
            defalut: ""
        },
        consult_fees: {
            type: String,
            defalut: ""
        },
        pwh: {
            type: String,
            defalut: ""
        },
        cwh_name: {
            type: String,
            defalut: ""
        },
        ug_degree: {
            type: String,
            defalut: ""
        },
        ug_city: {
            type: String,
            defalut: ""
        },
        ug_certificate: {
            type: String,
            defalut: ""
        },
        pg_degree: {
            type: String,
            defalut: ""
        },
        pg_city: {
            type: String,
            defalut: ""
        },
        pg_certificate: {
            type: String,
            defalut: ""
        },
        country: {
            type: String,
            defalut: ""
        },
        state: {
            type: String,
            defalut: ""
        },
        city: {
            type: String,
            defalut: ""
        },
        address: {
            type: String,
            defalut: ""
        },
        education: {
            type: String,
            defalut: ""
        },
        status: {
            type: String,
            default: "Active",
            enum: ["Active", "InActive"]
        },
    }, { timestamps: true }
)



const Doctor = mongoose.models.Doctor || mongoose.model("Doctor", doctorSchema, "doctors");

export default Doctor;
