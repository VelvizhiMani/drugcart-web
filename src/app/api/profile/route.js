import { authenticateUser } from '../../../utils/middleware';
import { NextResponse } from 'next/server';

export async function GET(request) {
    const { success, user, message } = await authenticateUser();
    if (!success) {
        return NextResponse.json({ error: message }, { status: 401 })
    }

    try {
        return NextResponse.json(user, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}