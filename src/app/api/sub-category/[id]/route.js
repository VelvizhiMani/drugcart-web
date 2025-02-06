import connectionToDatabase from '../../../../lib/mongodb'
import Subcategory from '../../../../models/SubCategory'
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
        const subcategoryId = await Subcategory.findById(id);
        if (!subcategoryId) {
            return NextResponse.json({ error: 'Sub Category not found' }, { status: 404 });
        }

        return NextResponse.json(subcategoryId, { status: 200 });
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
        const updatedSubCategory = await Subcategory.findByIdAndUpdate(id, body, { new: true });

        if (!updatedSubCategory) {
            return NextResponse.json({ error: 'SubCategory not found' }, { status: 404 });
        }

        return NextResponse.json(updatedSubCategory, { status: 200 });
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
        const deletedSubCategory = await Subcategory.findByIdAndDelete(id);

        if (!deletedSubCategory) {
            return NextResponse.json({ error: 'SubCategory not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'SubCategory deleted successfully' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error deleting user' }, { status: 500 });
    }
}
