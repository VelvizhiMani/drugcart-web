import connectionToDatabase from '../../../../lib/mongodb'
import Articles from '../../../../models/Articles'
import { adminAuthorization } from '../../../../utils/middleware';
import { NextResponse } from 'next/server'

export async function GET(request, { params }) {
    try {
        await connectionToDatabase();
        const { success, user, message } = await adminAuthorization();

        if (!success) {
            return NextResponse.json({ error: message }, { status: 401 });
        }
        const { id } = await params;
        const ArticlesId = await Articles.findById(id);
        if (!ArticlesId) {
            return NextResponse.json({ error: 'Articles not found' }, { status: 404 });
        }

        return NextResponse.json(ArticlesId, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching Articles' }, { status: 500 });
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
        const updatedArticles = await Articles.findByIdAndUpdate(id, body, { new: true });

        if (!updatedArticles) {
            return NextResponse.json({ error: 'Articles not found' }, { status: 404 });
        }

        return NextResponse.json(updatedArticles, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error updating Articles' }, { status: 500 });
    }
}

export async function DELETE(request, { params }) {
    try {
        const { success, user, message } = await adminAuthorization();

        if (!success) {
            return NextResponse.json({ error: message }, { status: 401 });
        }

        const { id } = await params;
        const deletedArticles = await Articles.findByIdAndDelete(id);

        if (!deletedArticles) {
            return NextResponse.json({ error: 'Articles not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Articles deleted successfully' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error deleting Articles' }, { status: 500 });
    }
}
