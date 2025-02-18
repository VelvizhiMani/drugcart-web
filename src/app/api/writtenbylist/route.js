import { authenticateUser } from '../../../utils/middleware';
import Writtenby from '../../../models/Writtenby';
import { NextResponse } from 'next/server';
import connnectionToDatabase from '@/lib/mongodb';
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3 = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
});

export async function POST(request) {
    try {
        await connnectionToDatabase();
        const { success, user, message } = await authenticateUser();

        if (!success) {
            return NextResponse.json({ error: message }, { status: 401 })
        }

        const {
            name,
            picture,
            imagealt,
            qualification,
            desgination,
            experience,
            expdetails,
            about,
            education,
            date,
            timestamp,
            updated_at,
            status
        } = await request.json();

        const isWrittenby = await Writtenby.findOne({ name });
        if (isWrittenby) {
            return NextResponse.json({ error: 'Name already exist' }, { status: 401 })
        }

        const addWrittenby = new Writtenby({
            name,
            picture,
            imagealt,
            qualification,
            desgination,
            experience,
            expdetails,
            about,
            date,
            timestamp,
            updated_at,
            education,
            status
        });

        await addWrittenby.save();
        return NextResponse.json(addWrittenby, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 10;
    const search = searchParams.get("search") || "";

    const filters = search ? { name: { $regex: search, $options: "i" } } : {};

    try {
        await connnectionToDatabase();
        const { success, user, message } = await authenticateUser();

        if (!success) {
            return NextResponse.json({ error: message }, { status: 401 })
        }

        const skip = (page - 1) * limit;

        const WrittenbyItems = await Writtenby.find(filters)
            .skip(skip)
            .limit(limit)

        const totalItems = await Writtenby.countDocuments(filters);
        const totalPages = Math.ceil(totalItems / limit);

        return NextResponse.json(
            {
                written_by_lists: WrittenbyItems,
                pagination: {
                    totalItems,
                    totalPages,
                    currentPage: page,
                },
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error fetching Writtenby items:", error);
        return NextResponse.json(
            { error: "Failed to fetch Writtenby items" },
            { status: 500 }
        );
    }
}