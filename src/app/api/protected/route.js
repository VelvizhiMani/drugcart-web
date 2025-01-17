import connectionToDatabase from '@/lib/mongodb'
import User from '@/models/User'
import { NextResponse } from 'next/server'
import { headers } from 'next/headers';
import jwt from 'jsonwebtoken';

export async function GET() {
    await connectionToDatabase();


    const headersInstance = await headers();
    const token = headersInstance.get('authorization')?.split(' ')[1];
    console.log(token);
    if (!token) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    try {
        const decoded = jwt.verify(token, 'test');
        const user = await User.findById(decoded.id).select('-password');
        if (!user) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 })
        }
        return NextResponse.json(user, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: 'Invalid or expired token' }, { status: 401 })
    }
}