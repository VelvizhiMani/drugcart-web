import connectionToDatabase from '../../../../lib/mongodb'
import Product from '../../../../models/Product'
import { authenticateUser } from '../../../../utils/middleware';
import { NextResponse } from 'next/server'

export async function GET(request, { params }) {
    try {
        await connectionToDatabase();
        const { success, user, message } = await authenticateUser();

        if (!success) {
            return NextResponse.json({ error: message }, { status: 401 });
        }
        const { id } = await params;
        const product = await Product.findById(id);
        if (!product) {
            return NextResponse.json({ error: 'Product not found' }, { status: 404 });
        }

        return NextResponse.json(product, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching Product' }, { status: 500 });
    }
}

export async function PUT(request, { params }) {
    try {
        const { success, user, message } = await authenticateUser();

        if (!success) {
            return NextResponse.json({ error: message }, { status: 401 });
        }
        const { id } = await params;
        const body = await request.json();
        const updatedProduct = await Product.findByIdAndUpdate(id, body, { new: true });

        if (!updatedProduct) {
            return NextResponse.json({ error: 'Product not found' }, { status: 404 });
        }

        return NextResponse.json(updatedProduct, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error updating Product' }, { status: 500 });
    }
}

export async function DELETE(request, { params }) {
    try {
        const { success, user, message } = await authenticateUser();

        if (!success) {
            return NextResponse.json({ error: message }, { status: 401 });
        }

        const { id } = await params;
        const deletedProduct = await Product.findByIdAndDelete(id);

        if (!deletedProduct) {
            return NextResponse.json({ error: 'Product not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Product deleted successfully' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error deleting Product' }, { status: 500 });
    }
}
