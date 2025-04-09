import mongoose, { Schema } from "mongoose";

const callDoctorSchema = new Schema(
    {
        userId: {
            type: mongoose.Schema.ObjectId,
            default: ""
        },
        doctor_name: {
            type: String,
            required: true
        },
        customer_phone: {
            type: String,
            default: ""
        },
        appoinment_id: {
            type: String,
            unique: true
        },
        consult_type: {
            type: String,
            default: ""
        },
        reason: {
            type: String,
            default: ""
        },
        payment_type: {
            type: String,
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

callDoctorSchema.pre("save", async function (next) {
    if (!this.appoinment_id) {
        try {
            const lastScan = await mongoose.model("CallDoctor").findOne({}, {}, { sort: { appoinment_id: -1 } });

            let newBookingId = lastScan && lastScan.appoinment_id
                ? parseInt(lastScan.appoinment_id) + 1
                : 1;

            this.appoinment_id = `DC-appoinment${newBookingId.toString()}`;
        } catch (error) {
            return next(error);
        }
    }
    next();
});

const CallDoctor = mongoose.models.CallDoctor || mongoose.model("CallDoctor", callDoctorSchema, "call_doctor");

export default CallDoctor;
