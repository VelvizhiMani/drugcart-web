import { authenticateUser } from "../../../utils/middleware";
import Order from "../../../models/Order";
import { NextResponse } from "next/server";
import connnectionToDatabase from "@/lib/mongodb";

export async function POST(request) {
    try {
        await connnectionToDatabase();
        const { success, user, message } = await authenticateUser();

        if (!success) {
            return NextResponse.json({ error: message }, { status: 401 });
        }

        const {
            shippingInfo,
            orderItems,
            rximage,
            paymentInfo,
            itemsPrice,
            shippingPrice,
            totalPrice,
        } = await request.json();

        const addOrder = new Order({
            userId: user?._id,
            shippingInfo,
            orderItems,
            rximage,
            paymentInfo,
            itemsPrice,
            shippingPrice,
            totalPrice,
        });

        await addOrder.save();
        return NextResponse.json(addOrder, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}