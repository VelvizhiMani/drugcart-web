import { authenticateUser } from '../../../utils/middleware';
import Product from '../../../models/Product';
import { NextResponse } from 'next/server';

export async function POST(request) {

    const { productName, desc } = await request.json();
    console.log('product', productName);

    try {
        // const existingItem = await Cart.find((item) => item.productId.toString() === productId);

        const product = new Product({ productName, desc });


        await product.save();
        return NextResponse.json(product, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}

export async function GET(req) {


    // Parse query parameters
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 10;
    const search = searchParams.get("search") || "";
 
    const filters = search ? { productName: { $regex: search, $options: "i" } } : {};
    console.log(filters);
    try {
        const skip = (page - 1) * limit;

        // Fetch cart items with pagination
        const cartItems = await Product.find(filters)
            .skip(skip)
            .limit(limit)

        // Total items in the user's cart
        const totalItems = await Product.countDocuments(filters);
        const totalPages = Math.ceil(totalItems / limit);

        return NextResponse.json(
            {
                products: cartItems,
                pagination: {
                    totalItems,
                    totalPages,
                    currentPage: page,
                },
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error fetching cart items:", error);
        return NextResponse.json(
            { error: "Failed to fetch cart items" },
            { status: 500 }
        );
    }
}