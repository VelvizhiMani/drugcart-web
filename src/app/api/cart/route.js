import { authenticateUser } from '../../../utils/middleware';
import Cart from '../../../models/Cart';
import { NextResponse } from 'next/server';

export async function POST(request) {

    const { success, user, message } = await authenticateUser();
    console.log(success);

    if (!success) {
        return NextResponse.json({ error: message }, { status: 401 })
    }

    const { quantity } = await request.json();
    console.log('carts', quantity);

    try {
        // const existingItem = await Cart.find((item) => item.productId.toString() === productId);

        const mycart = new Cart({ userId: user?._id, quantity });


        await mycart.save();
        return NextResponse.json(mycart, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}

export async function GET() {
    const { success, user, message } = await authenticateUser();

    if (!success) {
        return NextResponse.json({ error: message }, { status: 401 })
    }
    
    const userWithCart = await Cart.find({ userId: user?._id });

    console.log(userWithCart);
    return NextResponse.json({ carts: userWithCart }, { status: 200 })
    // if (!success) {
    //     return res.status(401).json({ message });
    // }

    // res.status(200).json({ cart: user.cart });
}