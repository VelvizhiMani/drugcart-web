import mongoose, { Schema } from "mongoose";

const ReviewbySchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        picture: {
            type: String,
            defalut: ""
        },
        imagealt: {
            type: String,
            defalut: ""
        },
        qualification: {
            type: String,
            defalut: ""
        },
        desgination: {
            type: String,
            defalut: ""
        },
        experience: {
            type: String,
            defalut: ""
        },
        expdetails: {
            type: String,
            defalut: ""
        },
        about: {
            type: String,
            defalut: ""
        },
        date: {
            type: Date,
            default: Date.now
        },
        timestamp: {
            type: Date,
            default: Date.now
        },
        updated_at: {
            type: Date,
            default: Date.now
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
    }
)



const Reviewby = mongoose.models.Reviewby || mongoose.model("Reviewby", ReviewbySchema, "reviewby");

export default Reviewby;
