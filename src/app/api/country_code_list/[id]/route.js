import connectionToDatabase from '../../../../lib/mongodb'
import CountryCode from '../../../../models/CountryCode'
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
        const CountryCodeId = await CountryCode.findById(id);
        if (!CountryCodeId) {
            return NextResponse.json({ error: 'CountryCode not found' }, { status: 404 });
        }

        return NextResponse.json(CountryCodeId, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching CountryCode' }, { status: 500 });
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
        const updatedCountryCode = await CountryCode.findByIdAndUpdate(id, body, { new: true });

        if (!updatedCountryCode) {
            return NextResponse.json({ error: 'CountryCode not found' }, { status: 404 });
        }

        return NextResponse.json(updatedCountryCode, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error updating CountryCode' }, { status: 500 });
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
        const deletedCountryCode = await CountryCode.findByIdAndDelete(id);

        if (!deletedCountryCode) {
            return NextResponse.json({ error: 'CountryCode not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'CountryCode deleted successfully' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error deleting CountryCode' }, { status: 500 });
    }
}
