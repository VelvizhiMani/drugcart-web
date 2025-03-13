import mongoose, { Schema } from "mongoose";

const testPackageSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        packageName: {
            type: String,
        },
        packageurl: {
            type: String,
        },
        testname: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        },
        nooftest: {
            type: String,
        },
        logo: {
            type: String,
        },
        image: {
            type: String,
        },
        price: {
            type: String,
        },
        saleprice: {
            type: String,
        },
        discount: {
            type: String,
        },
        type: {
            type: String,
        },
        required: {
            type: String,
        },
        offervalid: {
            type: String,
        },
        labdescription: {
            type: String,
        },
        description: {
            type: String,
        },
        certificates: {
            type: String,
        },
        testincludes: {
            type: String,
        },
        deliverytiming: {
            type: String,
        },
        procedure: {
            type: String,
        },
        userId: {
            type: mongoose.Schema.ObjectId,
            default: ""
        },
        status: {
            type: String,
            default: "Active",
            enum: ["Active", "InActive"]
        },
    },
    { timestamps: true }
)



const TestPackage = mongoose.models.TestPackage || mongoose.model("TestPackage", testPackageSchema, "labtest");

export default TestPackage;
