import { authenticateUser, adminAuthorization } from '../../../utils/middleware';
import Scan from '../../../models/Scan';
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
            scantestname,
            url,
            scanImage,
            category,
            areas,
            description
        } = await request.json();

        const isScan = await Scan.findOne({ scantestname });
        if (isScan) {
            return NextResponse.json({ error: 'Scan already exist' }, { status: 401 })
        }

        const addScan = new Scan({
            scantestname,
            url,
            scanImage,
            category,
            areas,
            description
        });

        await addScan.save();
        return NextResponse.json(addScan, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 10;
    const search = searchParams.get("search") || "";

    const filters = search ? { scantestname: { $regex: search, $options: "i" } } : {};

    try {
        await connnectionToDatabase();

        const skip = (page - 1) * limit;

        const ScanItems = await Scan.find(filters)
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit)

        const totalItems = await Scan.countDocuments(filters);
        const totalPages = Math.ceil(totalItems / limit);

        const ScanItemsWithIndex = ScanItems.map((item, index) => ({
            ...item.toObject(),
            sno: skip + index + 1,
        }));

        return NextResponse.json(
            {
                scans: ScanItemsWithIndex,
                pagination: {
                    totalItems,
                    totalPages,
                    currentPage: page,
                },
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error fetching Scan items:", error);
        return NextResponse.json(
            { error: "Failed to fetch Scan items" },
            { status: 500 }
        );
    }
}