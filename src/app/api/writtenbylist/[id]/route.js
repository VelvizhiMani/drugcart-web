import connectionToDatabase from '../../../../lib/mongodb'
import Writtenby from '../../../../models/Writtenby'
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
        const WrittenbyId = await Writtenby.findById(id);
        if (!WrittenbyId) {
            return NextResponse.json({ error: 'Writtenby not found' }, { status: 404 });
        }

        return NextResponse.json(WrittenbyId, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching Writtenby' }, { status: 500 });
    }
}

export async function PUT(request, { params }) {
    try {
        const { success, user, message } = await adminAuthorization();

        if (!success) {
            return NextResponse.json({ error: message }, { status: 401 });
        }

        if (user?.role === "staff") {
            return NextResponse.json({ error: 'Permission not found' }, { status: 404 });
        }
        
        const { id } = await params;
        const body = await request.json();
        const updatedWrittenby = await Writtenby.findByIdAndUpdate(id, body, { new: true });

        if (!updatedWrittenby) {
            return NextResponse.json({ error: 'Writtenby not found' }, { status: 404 });
        }

        return NextResponse.json(updatedWrittenby, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error updating Writtenby' }, { status: 500 });
    }
}

export async function DELETE(request, { params }) {
    try {
        const { success, user, message } = await adminAuthorization();

        if (!success) {
            return NextResponse.json({ error: message }, { status: 401 });
        }

        if (user?.role === "staff") {
            return NextResponse.json({ error: 'Permission not found' }, { status: 404 });
        }

        const { id } = await params;
        const deletedWrittenby = await Writtenby.findByIdAndDelete(id);

        if (!deletedWrittenby) {
            return NextResponse.json({ error: 'Writtenby not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Writtenby deleted successfully' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error deleting Writtenby' }, { status: 500 });
    }
}
