import mongoose, { Schema } from "mongoose";

const packSchema = new Schema(
    {
        packagename: {
            type: String,
            required: true
        },
        packageurl: {
            type: String,
            default: "",
        },
        status: {
            type: String,
            default: "Active",
            enum: ["Active", "InActive"]
        },
    },
    { timestamps: true }
)



const Pack = mongoose.models.Pack || mongoose.model("Pack", packSchema, "pack");

export default Pack;
