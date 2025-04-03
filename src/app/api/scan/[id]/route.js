import connectionToDatabase from '../../../../lib/mongodb'
import Scan from '../../../../models/Scan'
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
        const ScanId = await Scan.findById(id);
        if (!ScanId) {
            return NextResponse.json({ error: 'Scan not found' }, { status: 404 });
        }

        return NextResponse.json(ScanId, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching Scan' }, { status: 500 });
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
        const updatedScan = await Scan.findByIdAndUpdate(id, body, { new: true });

        if (!updatedScan) {
            return NextResponse.json({ error: 'Scan not found' }, { status: 404 });
        }

        return NextResponse.json(updatedScan, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error updating Scan' }, { status: 500 });
    }
}

export async function DELETE(request, { params }) {
    try {
        const { success, user, message } = await adminAuthorization();

        if (!success) {
            return NextResponse.json({ error: message }, { status: 401 });
        }

        const { id } = await params;
        const deletedScan = await Scan.findByIdAndDelete(id);

        if (!deletedScan) {
            return NextResponse.json({ error: 'Scan not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Scan deleted successfully' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error deleting Scan' }, { status: 500 });
    }
}
