import { authenticateUser, adminAuthorization } from '../../../utils/middleware';
import CountryCode from '../../../models/CountryCode';
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
        const { success, user, message } = await adminAuthorization();

        if (!success) {
            return NextResponse.json({ error: message }, { status: 401 })
        }

        const {
            country,
            code,
            flag,
            status,
            date,
            updated_at,
        } = await request.json();

        const isCountryCode = await CountryCode.findOne({ country });
        if (isCountryCode) {
            return NextResponse.json({ error: 'Name already exist' }, { status: 401 })
        }

        const addCountryCode = new CountryCode({
            country,
            code,
            flag,
            status,
            date,
            updated_at,
        });
        await addCountryCode.save();
        return NextResponse.json(addCountryCode, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 10;
    const search = searchParams.get("search") || "";

    const filters = search ? { country: { $regex: search, $options: "i" } } : {};

    try {
        await connnectionToDatabase();
        const { success, user, message } = await adminAuthorization();

        if (!success) {
            return NextResponse.json({ error: message }, { status: 401 })
        }

        const skip = (page - 1) * limit;

        const CountryCodeItems = await CountryCode.find(filters)
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit)

        const totalItems = await CountryCode.countDocuments(filters);
        const totalPages = Math.ceil(totalItems / limit);

        const CountryCodesWithIndex = CountryCodeItems.map((item, index) => ({
            ...item.toObject(),
            sno: skip + index + 1,
        }));

        return NextResponse.json(
            {
                country_code_lists: CountryCodesWithIndex,
                pagination: {
                    totalItems,
                    totalPages,
                    currentPage: page,
                },
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error fetching CountryCode items:", error);
        return NextResponse.json(
            { error: "Failed to fetch CountryCode items" },
            { status: 500 }
        );
    }
}