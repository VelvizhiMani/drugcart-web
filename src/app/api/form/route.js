import { authenticateUser } from '../../../utils/middleware';
import Form from '../../../models/Form';
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
            formname,
            formurl,
            picture,
            alt,
            metatitle,
            metadesc,
            metakeyboard,
            status
        } = await request.json();

        const isForm = await Form.findOne({ formname });
        if (isForm) {
            return NextResponse.json({ error: 'Form name already exist' }, { status: 401 })
        }

        const addForm = new Form({
            formname,
            formurl,
            picture,
            alt,
            metatitle,
            metadesc,
            metakeyboard,
            status
        });

        await addForm.save();
        return NextResponse.json(addForm, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 10;
    const search = searchParams.get("search") || "";

    const filters = search ? { formname: { $regex: search, $options: "i" } } : {};

    try {
        await connnectionToDatabase();
        const { success, user, message } = await authenticateUser();

        if (!success) {
            return NextResponse.json({ error: message }, { status: 401 })
        }

        const skip = (page - 1) * limit;

        const formItems = await Form.find(filters)
            .skip(skip)
            .limit(limit)

        const totalItems = await Form.countDocuments(filters);
        const totalPages = Math.ceil(totalItems / limit);

        const formItemsWithIndex = formItems.map((item, index) => ({
            ...item.toObject(),
            sno: skip + index + 1,
        }));

        return NextResponse.json(
            {
                forms: formItemsWithIndex,
                pagination: {
                    totalItems,
                    totalPages,
                    currentPage: page,
                },
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error fetching Form items:", error);
        return NextResponse.json(
            { error: "Failed to fetch Form items" },
            { status: 500 }
        );
    }
}