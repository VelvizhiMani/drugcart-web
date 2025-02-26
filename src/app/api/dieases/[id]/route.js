import connectionToDatabase from '../../../../lib/mongodb'
import Diseases from '../../../../models/Diseases'
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
        const DiseasesId = await Diseases.findById(id);
        if (!DiseasesId) {
            return NextResponse.json({ error: 'Diseases not found' }, { status: 404 });
        }

        return NextResponse.json(DiseasesId, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching Diseases' }, { status: 500 });
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
        const updatedDiseases = await Diseases.findByIdAndUpdate(id, body, { new: true });

        if (!updatedDiseases) {
            return NextResponse.json({ error: 'Diseases not found' }, { status: 404 });
        }

        return NextResponse.json(updatedDiseases, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error updating Diseases' }, { status: 500 });
    }
}

export async function DELETE(request, { params }) {
    try {
        const { success, user, message } = await authenticateUser();

        if (!success) {
            return NextResponse.json({ error: message }, { status: 401 });
        }

        const { id } = await params;
        const deletedDiseases = await Diseases.findByIdAndDelete(id);

        if (!deletedDiseases) {
            return NextResponse.json({ error: 'Diseases not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Diseases deleted successfully' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error deleting Diseases' }, { status: 500 });
    }
}
