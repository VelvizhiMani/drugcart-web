import connnectionToDatabase from "../../../../../lib/mongodb";
import MainSlider from '../../../../../models/MainSlider'
import { NextResponse } from 'next/server'

export async function GET(request, { params }) {
    try {
        await connnectionToDatabase();

        const { url } = await params;
        const MainSliderId = await MainSlider.find({ url });
        if (!MainSliderId) {
            return NextResponse.json({ error: 'MainSlider not found' }, { status: 404 });
        }

        return NextResponse.json(MainSliderId, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching MainSlider' }, { status: 500 });
    }
}