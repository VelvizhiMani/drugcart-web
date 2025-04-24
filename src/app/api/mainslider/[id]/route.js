import connectionToDatabase from '../../../../lib/mongodb'
import MainSlider from '../../../../models/MainSlider'
import { authenticateUser, adminAuthorization } from '../../../../utils/middleware';
import { NextResponse } from 'next/server'

export async function GET(request, { params }) {
    try {
        await connectionToDatabase();
        // const { success, user, message } = await adminAuthorization();

        // if (!success) {
        //     return NextResponse.json({ error: message }, { status: 401 });
        // }
        const { id } = await params;
        const MainSliderId = await MainSlider.findById(id);
        if (!MainSliderId) {
            return NextResponse.json({ error: 'MainSlider not found' }, { status: 404 });
        }

        return NextResponse.json(MainSliderId, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching MainSlider' }, { status: 500 });
    }
}

export async function PUT(request, { params }) {
    try {
        const { success, user, message } = await adminAuthorization();

        if (!success) {
            return NextResponse.json({ error: message }, { status: 401 });
        }
        const { id } = await params;
        const body = await request.json();
        const updatedMainSlider = await MainSlider.findByIdAndUpdate(id, body, { new: true });

        if (!updatedMainSlider) {
            return NextResponse.json({ error: 'MainSlider not found' }, { status: 404 });
        }

        return NextResponse.json(updatedMainSlider, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error updating MainSlider' }, { status: 500 });
    }
}

export async function DELETE(request, { params }) {
    try {
        const { success, user, message } = await adminAuthorization();

        if (!success) {
            return NextResponse.json({ error: message }, { status: 401 });
        }

        const { id } = await params;
        const deletedMainSlider = await MainSlider.findByIdAndDelete(id);

        if (!deletedMainSlider) {
            return NextResponse.json({ error: 'MainSlider not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'MainSlider deleted successfully' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error deleting MainSlider' }, { status: 500 });
    }
}
