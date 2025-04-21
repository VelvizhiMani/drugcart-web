import connectionToDatabase from '../../../../lib/mongodb'
import PageBanner from '../../../../models/PageBanner'
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
        const PageBannerId = await PageBanner.findById(id);
        if (!PageBannerId) {
            return NextResponse.json({ error: 'PageBanner not found' }, { status: 404 });
        }

        return NextResponse.json(PageBannerId, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching PageBanner' }, { status: 500 });
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
        const updatedPageBanner = await PageBanner.findByIdAndUpdate(id, body, { new: true });

        if (!updatedPageBanner) {
            return NextResponse.json({ error: 'PageBanner not found' }, { status: 404 });
        }

        return NextResponse.json(updatedPageBanner, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error updating PageBanner' }, { status: 500 });
    }
}

export async function DELETE(request, { params }) {
    try {
        const { success, user, message } = await adminAuthorization();

        if (!success) {
            return NextResponse.json({ error: message }, { status: 401 });
        }

        const { id } = await params;
        const deletedPageBanner = await PageBanner.findByIdAndDelete(id);

        if (!deletedPageBanner) {
            return NextResponse.json({ error: 'PageBanner not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'PageBanner deleted successfully' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error deleting PageBanner' }, { status: 500 });
    }
}
