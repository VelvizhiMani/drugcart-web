import connectionToDatabase from '../lib/mongodb'
import User from '../models/User'
import { NextResponse } from 'next/server'
import { headers } from 'next/headers';
import jwt from 'jsonwebtoken';

export async function authenticateUser() {
    await connectionToDatabase();
    const headersInstance = await headers();
    const token = headersInstance.get('authorization')?.split(' ')[1];
    if (!token) {
        return { success: false, message: 'Unauthorized' };
    }

    try {
        const decoded = jwt.verify(token, 'test');
        const user = await User.findById(decoded.id).select('-password');
        if (!user) {
            return { success: false, message: 'User not found' };
        }
        return { success: true, user };
    } catch (error) {
        return { success: false, message: 'Invalid or expired token' };
    }
}