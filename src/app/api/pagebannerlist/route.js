import { authenticateUser, adminAuthorization } from '../../../utils/middleware';
import PageBanner from '../../../models/PageBanner';
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
            pagename,
            image,
            alt,
            status,
        } = await request.json();

        const isPageBanner = await PageBanner.findOne({ pagename });
        if (isPageBanner) {
            return NextResponse.json({ error: 'page name already exist' }, { status: 404 })
        }

        const addPageBanner = new PageBanner({
            pagename,
            image,
            alt,
            status,
        });

        await addPageBanner.save();
        return NextResponse.json(addPageBanner, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 10;
    const search = searchParams.get("search") || "";

    const filters = search ? { pagename: { $regex: search, $options: "i" } } : {};

    try {
        await connnectionToDatabase();

        const skip = (page - 1) * limit;

        const PageBannerItems = await PageBanner.find(filters)
            .sort({ updated_at: -1 })
            .skip(skip)
            .limit(limit)

        const totalItems = await PageBanner.countDocuments(filters);
        const totalPages = Math.ceil(totalItems / limit);

        const PageBannerIndex = PageBannerItems.map((item, index) => ({
            ...item.toObject(),
            sno: skip + index + 1,
        }));

        return NextResponse.json(
            {
                page_bannners: PageBannerIndex,
                pagination: {
                    totalItems,
                    totalPages,
                    currentPage: page,
                },
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error fetching PageBanner items:", error);
        return NextResponse.json(
            { error: "Failed to fetch PageBanner items" },
            { status: 500 }
        );
    }
}