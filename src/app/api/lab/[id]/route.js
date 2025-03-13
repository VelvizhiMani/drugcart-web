import connectionToDatabase from '../../../../lib/mongodb'
import Lab from '../../../../models/Lab'
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
        const LabId = await Lab.findById(id);
        if (!LabId) {
            return NextResponse.json({ error: 'Lab not found' }, { status: 404 });
        }

        return NextResponse.json(LabId, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching Lab' }, { status: 500 });
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
        const updatedLab = await Lab.findByIdAndUpdate(id, body, { new: true });

        if (!updatedLab) {
            return NextResponse.json({ error: 'Lab not found' }, { status: 404 });
        }

        return NextResponse.json(updatedLab, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error updating Lab' }, { status: 500 });
    }
}

export async function DELETE(request, { params }) {
    try {
        const { success, user, message } = await adminAuthorization();

        if (!success) {
            return NextResponse.json({ error: message }, { status: 401 });
        }

        const { id } = await params;
        const deletedLab = await Lab.findByIdAndDelete(id);

        if (!deletedLab) {
            return NextResponse.json({ error: 'Lab not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Lab deleted successfully' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error deleting Lab' }, { status: 500 });
    }
}
