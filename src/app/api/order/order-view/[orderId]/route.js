import connnectionToDatabase from "../../../../../lib/mongodb";
import Order from '../../../../../models/Order'
import { NextResponse } from 'next/server'

export async function GET(request, { params }) {
    try {
        await connnectionToDatabase();

        const { orderId } = await params;

        const OrderId = await Order.findOne({ orderId });
        if (!OrderId) {
            return NextResponse.json({ error: 'Order url not found' }, { status: 404 });
        }

        return NextResponse.json(OrderId, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching Order url' }, { status: 500 });
    }
}