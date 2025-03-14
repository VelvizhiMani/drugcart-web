import mongoose, { Schema } from "mongoose";

const labBookingSchema = new Schema(
    {
        packagename: {
            type: String,
            default: ""
        },
        noofpersons: {
            type: String,
            default: ""
        },
        name1: {
            type: String,
            default: ""
        },
        age1: {
            type: String,
            default: ""
        },
        gender1: {
            type: String,
            default: ""
        },
        name2: {
            type: String,
            default: ""
        },
        age2: {
            type: String,
            default: ""
        },
        gender2: {
            type: String,
            default: ""
        },
        name3: {
            type: String,
            default: ""
        },
        age3: {
            type: String,
            default: ""
        },
        gender3: {
            type: String,
            default: ""
        },
        name4: {
            type: String,
            default: ""
        },
        age4: {
            type: String,
            default: ""
        },
        gender4: {
            type: String,
            default: ""
        },
        name5: {
            type: String,
            default: ""
        },
        age5: {
            type: String,
            default: ""
        },
        gender5: {
            type: String,
            default: ""
        },
        email: {
            type: String,
            default: ""
        },
        phone: {
            type: String,
            default: ""
        },
        address: {
            type: String,
            default: ""
        },
        appoitmentdate: {
            type: String,
            default: ""
        },
        timing: {
            type: String,
            default: ""
        },
        crp: {
            type: String,
            default: ""
        },
        covidantibody: {
            type: String,
            default: ""
        },
        electrolytes: {
            type: String,
            default: ""
        },
        t3t4: {
            type: String,
            default: ""
        },
        hard_copy: {
            type: String,
            default: ""
        },
    },
    { timestamps: true }
)



const Labbooking = mongoose.models.Labbooking || mongoose.model("Labbooking", labBookingSchema, "labbooking");

export default Labbooking;
