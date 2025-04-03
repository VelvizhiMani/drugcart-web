import mongoose, { Schema } from "mongoose";

const storageSchema = new Schema(
    {
     storageid: {
      type: String,
      unique: true,
    },
        storagename: {
            type: String,
            required: true
        },
        status: {
            type: String,
            default: "Active",
            enum: ["Active", "InActive"]
        },
    },
    { timestamps: true }
)



const Storage = mongoose.models.Storage || mongoose.model("Storage", storageSchema, "storage");

export default Storage;
