import mongoose, { Schema } from "mongoose";
import shortid from "shortid";

const orderSchema = new Schema(
    {
        orderId: { type: String, default: shortid.generate, unique: true },
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
            id: {
                type: String,
                default: "",
            },
            status: {
                type: String,
                default: "Active",
                enum: ["Active", "InActive"],
            },
        },
        // paidAt: {
        //   type: Date,
        //   default: Date.now,
        // },
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
        orderStatus: {
            type: String,
            default: "Processing",
            enum: ["Processing", "Completed", "Cancelled"],
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
        // delieverdAt: {
        //   type: Date,
        //   default: Date.now,
        // },
        // createdAt: {
        //   type: Date,
        //   default: Date.now,
        // },
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

const Order =
    mongoose.models.Order || mongoose.model("Order", orderSchema, "order");

export default Order;
