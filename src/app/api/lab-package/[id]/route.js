import connectionToDatabase from '../../../../lib/mongodb'
import LabPackage from '../../../../models/LabPackage'
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
        const LabPackageId = await LabPackage.findById(id);
        if (!LabPackageId) {
            return NextResponse.json({ error: 'Lab Package not found' }, { status: 404 });
        }

        return NextResponse.json(LabPackageId, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching Lab Package' }, { status: 500 });
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
        const updatedLabPackage = await LabPackage.findByIdAndUpdate(id, body, { new: true });

        if (!updatedLabPackage) {
            return NextResponse.json({ error: 'Lab Package not found' }, { status: 404 });
        }

        return NextResponse.json(updatedLabPackage, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error updating Lab Package' }, { status: 500 });
    }
}

export async function DELETE(request, { params }) {
    try {
        const { success, user, message } = await adminAuthorization();

        if (!success) {
            return NextResponse.json({ error: message }, { status: 401 });
        }

        const { id } = await params;
        const deletedLabPackage = await LabPackage.findByIdAndDelete(id);

        if (!deletedLabPackage) {
            return NextResponse.json({ error: 'LabPackage not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Lab Package deleted successfully' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error deleting Lab Package' }, { status: 500 });
    }
}
