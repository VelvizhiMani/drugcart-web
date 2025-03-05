import connectionToDatabase from '../../../../lib/mongodb'
import InfoGraphics from '../../../../models/InfoGraphics'
import { authenticateUser, adminAuthorization } from '../../../../utils/middleware';
import { NextResponse } from 'next/server'

export async function GET(request, { params }) {
    try {
        await connectionToDatabase();
        const { success, user, message } = await adminAuthorization();

        if (!success) {
            return NextResponse.json({ error: message }, { status: 401 });
        }
        const { id } = await params;
        const InfoGraphicsId = await InfoGraphics.findById(id);
        if (!InfoGraphicsId) {
            return NextResponse.json({ error: 'InfoGraphics not found' }, { status: 404 });
        }

        return NextResponse.json(InfoGraphicsId, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching InfoGraphics' }, { status: 500 });
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
        const updatedInfoGraphics = await InfoGraphics.findByIdAndUpdate(id, body, { new: true });

        if (!updatedInfoGraphics) {
            return NextResponse.json({ error: 'InfoGraphics not found' }, { status: 404 });
        }

        return NextResponse.json(updatedInfoGraphics, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error updating InfoGraphics' }, { status: 500 });
    }
}

export async function DELETE(request, { params }) {
    try {
        const { success, user, message } = await adminAuthorization();

        if (!success) {
            return NextResponse.json({ error: message }, { status: 401 });
        }

        const { id } = await params;
        const deletedInfoGraphics = await InfoGraphics.findByIdAndDelete(id);

        if (!deletedInfoGraphics) {
            return NextResponse.json({ error: 'InfoGraphics not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'InfoGraphics deleted successfully' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error deleting InfoGraphics' }, { status: 500 });
    }
}
