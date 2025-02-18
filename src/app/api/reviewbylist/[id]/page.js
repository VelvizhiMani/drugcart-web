import connectionToDatabase from '../../../../lib/mongodb'
import ReviewBy from '../../../../models/ReviewBy'
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
        const ReviewById = await ReviewBy.findById(id);
        if (!ReviewById) {
            return NextResponse.json({ error: 'ReviewBy not found' }, { status: 404 });
        }

        return NextResponse.json(ReviewById, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching ReviewBy' }, { status: 500 });
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
        const updatedReviewBy = await ReviewBy.findByIdAndUpdate(id, body, { new: true });

        if (!updatedReviewBy) {
            return NextResponse.json({ error: 'ReviewBy not found' }, { status: 404 });
        }

        return NextResponse.json(updatedReviewBy, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error updating ReviewBy' }, { status: 500 });
    }
}

export async function DELETE(request, { params }) {
    try {
        const { success, user, message } = await authenticateUser();

        if (!success) {
            return NextResponse.json({ error: message }, { status: 401 });
        }

        const { id } = await params;
        const deletedReviewBy = await ReviewBy.findByIdAndDelete(id);

        if (!deletedReviewBy) {
            return NextResponse.json({ error: 'ReviewBy not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'ReviewBy deleted successfully' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error deleting ReviewBy' }, { status: 500 });
    }
}
