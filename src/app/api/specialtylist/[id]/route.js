import connectionToDatabase from '../../../../lib/mongodb'
import Specialty from '../../../../models/Specialty'
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
        const SpecialtyId = await Specialty.findById(id);
        if (!SpecialtyId) {
            return NextResponse.json({ error: 'Specialty not found' }, { status: 404 });
        }

        return NextResponse.json(SpecialtyId, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching Specialty' }, { status: 500 });
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
        const updatedSpecialty = await Specialty.findByIdAndUpdate(id, body, { new: true });

        if (!updatedSpecialty) {
            return NextResponse.json({ error: 'Specialty not found' }, { status: 404 });
        }

        return NextResponse.json(updatedSpecialty, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error updating Specialty' }, { status: 500 });
    }
}

export async function DELETE(request, { params }) {
    try {
        const { success, user, message } = await adminAuthorization();

        if (!success) {
            return NextResponse.json({ error: message }, { status: 401 });
        }

        const { id } = await params;
        const deletedSpecialty = await Specialty.findByIdAndDelete(id);

        if (!deletedSpecialty) {
            return NextResponse.json({ error: 'Specialty not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Specialty deleted successfully' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error deleting Specialty' }, { status: 500 });
    }
}
