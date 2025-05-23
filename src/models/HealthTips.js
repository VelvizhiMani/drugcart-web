import mongoose, { Schema } from "mongoose";

const HealthTipsSchema = new Schema(
    {
        name: {
            type: String,
            default: ""
        },
        url: {
            type: String,
            default: ""
        },

        description: {
            type: String,
            default: ""
        },
        vedio: {
            type: String,
            default: ""
        },
        image: {
            type: String,
            default: ""
        },
        status: {
            type: String,
            default: "Active",
            enum: ["Active", "InActive"]
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
        metatitle: {
            type: String,
            default: ""
        },
        metadesc: {
            type: String,
            default: ""
        },
        metakeyboard: {
            type: String,
            default: ""
        },
    }
)



const HealthTips = mongoose.models.HealthTips || mongoose.model("HealthTips", HealthTipsSchema, "healthtips");

export default HealthTips;
