import { authenticateUser, adminAuthorization } from '../../../utils/middleware';
import Promotion from '../../../models/Promotion';
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
            title,
            url,
            image,
            alt,
            status,
        } = await request.json();

        const isPromotion = await Promotion.findOne({ title });
        if (isPromotion) {
            return NextResponse.json({ error: 'Promotion already exist' }, { status: 404 })
        }

        const addPromotion = new Promotion({
            title,
            url,
            image,
            alt,
            status,
        });

        await addPromotion.save();
        return NextResponse.json(addPromotion, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 10;
    const search = searchParams.get("search") || "";

    const filters = search ? { title: { $regex: search, $options: "i" } } : {};

    try {
        await connnectionToDatabase();

        const skip = (page - 1) * limit;

        const PromotionItems = await Promotion.find(filters)
            .sort({ updated_at: -1 })
            .skip(skip)
            .limit(limit)

        const totalItems = await Promotion.countDocuments(filters);
        const totalPages = Math.ceil(totalItems / limit);

        const PromotionIndex = PromotionItems.map((item, index) => ({
            ...item.toObject(),
            sno: skip + index + 1,
        }));

        return NextResponse.json(
            {
                promotions: PromotionIndex,
                pagination: {
                    totalItems,
                    totalPages,
                    currentPage: page,
                },
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error fetching Promotion items:", error);
        return NextResponse.json(
            { error: "Failed to fetch Promotion items" },
            { status: 500 }
        );
    }
}