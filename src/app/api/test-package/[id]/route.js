import connectionToDatabase from '../../../../lib/mongodb'
import TestPackage from '../../../../models/TestPackage'
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
        const TestPackageId = await TestPackage.findById(id);
        if (!TestPackageId) {
            return NextResponse.json({ error: 'Test Package not found' }, { status: 404 });
        }

        return NextResponse.json(TestPackageId, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching Test Package' }, { status: 500 });
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
        const updatedTestPackage = await TestPackage.findByIdAndUpdate(id, body, { new: true });

        if (!updatedTestPackage) {
            return NextResponse.json({ error: 'Lab Test not found' }, { status: 404 });
        }

        return NextResponse.json(updatedTestPackage, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error updating Test Package' }, { status: 500 });
    }
}

export async function DELETE(request, { params }) {
    try {
        const { success, user, message } = await adminAuthorization();

        if (!success) {
            return NextResponse.json({ error: message }, { status: 401 });
        }

        const { id } = await params;
        const deletedTestPackage = await TestPackage.findByIdAndDelete(id);

        if (!deletedTestPackage) {
            return NextResponse.json({ error: 'Test Package not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Lab Test deleted successfully' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error deleting Test Package' }, { status: 500 });
    }
}
