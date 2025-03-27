import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema(
    {
        orderId: {
            type: String,
            unique: true,
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        shippingInfo: {
            type: {
                type: String,
            },
            cus_name: {
                type: String,
            },
            lastname: {
                type: String,
            },
            phone: {
                type: String,
            },
            email: {
                type: String,
            },
            address: {
                type: String,
            },
            postcode: {
                type: String,
            },
            town: {
                type: String,
            },
            city: {
                type: String,
            },
            state: {
                type: String,
            },
            country: {
                type: String,
            },
        },
        rximage: {
            type: String,
        },
        orderItems: [Object],
        paymentInfo: {
            transaction_id: {
                type: String,
                default: "",
            },
            pg_transaction_id: {
                type: String,
                default: "",
            },
            pg_mode: {
                type: String,
                default: "",
            },
            payment_status: {
                type: String,
                default: "Active",
                enum: ["Active", "InActive"],
            },
            bank_ref_id: {
                type: String,
                default: "",
            },
        },
        trackingInfo: {
            trackingno: {
                type: String,
                default: "",
            },
            shippingcompany: {
                type: String,
                default: "",
            },
            shippingweb: {
                type: String,
                default: "",
            },
            tracksenddate: {
                type: String,
                default: "",
            },
            trackenddate: {
                type: String,
                default: "",
            },
            trackingimg: {
                type: String,
                default: "",
            },
            orderStatus: {
                type: String,
                default: "Processing",
                enum: ["Processing", "Completed", "Cancelled", "Transit", "Delivered", "Pending"],
            },
        },
        itemsPrice: {
            type: Number,
            default: "",
        },
        taxPrice: {
            type: Number,
            default: "",
        },
        shippingPrice: {
            type: Number,
            default: "",
        },
        totalPrice: {
            type: Number,
            default: "",
        },
        reason: {
            type: String,
            default: "",
        },
        cancelItem: {
            type: String,
            default: "InActive",
            enum: ["Active", "InActive"],
        },
        notes: {
            type: String,
            default: "",
        },
        refundstatus: {
            type: String,
            default: "",
        },
        status: {
            type: String,
            default: "Active",
            enum: ["Active", "InActive"],
        },
    },
    {
        timestamps: true,
    }
);

orderSchema.pre("save", async function (next) {
    if (!this.orderId) {
        const now = new Date();
        const year = now.getFullYear().toString().slice(-2);
        const hours = now.getHours().toString().padStart(2, "0");
        const minutes = now.getMinutes().toString().padStart(2, "0");
        const seconds = now.getSeconds().toString().padStart(2, "0");

        this.orderId = `${year}${hours}${minutes}${seconds}`;
    }
    next();
});

orderSchema.pre("save", async function (next) {
    if (!this.trackingInfo) {
        this.trackingInfo = {};
    }

    if (!this.trackingInfo.trackingno) {
        const now = new Date();
        const year = now.getFullYear().toString().slice(-2);
        const hours = now.getHours().toString().padStart(2, "0");
        const minutes = now.getMinutes().toString().padStart(2, "0");
        const seconds = now.getSeconds().toString().padStart(2, "0");

        this.trackingInfo.trackingno = `M4${year}${hours}${minutes}${seconds}`;
    }
    next();
});


const Order =
    mongoose.models.Order || mongoose.model("Order", orderSchema, "order");

export default Order;
