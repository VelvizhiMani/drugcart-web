import connectionToDatabase from '@/lib/mongodb'
import User from '@/models/User'
import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs';

export async function GET(request, response) {
    try {
    await connectionToDatabase()
    const user = await User.find();
    if (user) {
        return NextResponse.json(user, { status: 200 })
      } else {
        return NextResponse.json({ message: "User not found" }, { status: 400 });
      }
  }catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}


export async function POST(request) {
    try {
        await connectionToDatabase()
        const { email, password } = await request.json()
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ error: 'User alreay exist' }, { status: 400 })
        } else {
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = new User({ email, password: hashedPassword });
            await newUser.save()
            return NextResponse.json(newUser, { status: 200 })
        }
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
