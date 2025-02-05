import connectionToDatabase from '../../../../lib/mongodb'
import Category from '../../../../models/Category'
import { authenticateUser } from '../../../../utils/middleware';
import { NextResponse } from 'next/server'

export async function GET(request, { params }) {
    const { success, user, message } = await authenticateUser();

    if (!success) {
        return NextResponse.json({ error: message }, { status: 401 });
    }

    try {
        await connectionToDatabase();
        const { id } = await params;
        const categoryId = await Category.findById(id);
        if (!categoryId) {
            return NextResponse.json({ error: 'Category not found' }, { status: 404 });
        }

        return NextResponse.json(categoryId, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching user' }, { status: 500 });
    }
}

export async function PUT(request, { params }) {
    const { success, user, message } = await authenticateUser();

    if (!success) {
        return NextResponse.json({ error: message }, { status: 401 });
    }

    try {
        const { id } = await params;
        const body = await request.json();
        const updatedCategory = await Category.findByIdAndUpdate(id, body, { new: true });

        if (!updatedCategory) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        return NextResponse.json(updatedCategory, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error updating user' }, { status: 500 });
    }
}

export async function DELETE(request, { params }) {
    const { success, user, message } = await authenticateUser();

    if (!success) {
        return NextResponse.json({ error: message }, { status: 401 });
    }

    try {
        const { id } = await params;
        const deletedCategory = await Category.findByIdAndDelete(id);

        if (!deletedCategory) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'User deleted successfully' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error deleting user' }, { status: 500 });
    }
}
