import { authenticateUser } from '../../../utils/middleware';
import Articles from '../../../models/Articles';
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
            blogname,
            blogimg,
            url,
            description,
            imagealt,
            metatitle,
            metadesc,
            metakeyboard
        } = await request.json();

        const isArticles = await Articles.findOne({ blogname });
        if (isArticles) {
            return NextResponse.json({ error: 'Blog Name already exist' }, { status: 401 })
        }

        const addArticles = new Articles({
            blogname,
            blogimg,
            url,
            description,
            imagealt,
            metatitle,
            metadesc,
            metakeyboard
        });

        await addArticles.save();
        return NextResponse.json(addArticles, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 10;
    const search = searchParams.get("search") || "";

    const filters = search ? { blogname: { $regex: search, $options: "i" } } : {};

    try {
        await connnectionToDatabase();
        const { success, user, message } = await authenticateUser();

        if (!success) {
            return NextResponse.json({ error: message }, { status: 401 })
        }

        const skip = (page - 1) * limit;

        const ArticlesItems = await Articles.find(filters)
            .skip(skip)
            .limit(limit)

        const totalItems = await Articles.countDocuments(filters);
        const totalPages = Math.ceil(totalItems / limit);

        const ArticlesWithIndex = ArticlesItems.map((item, index) => ({
            ...item.toObject(),
            sno: skip + index + 1,
        }));

        return NextResponse.json(
            {
                articles: ArticlesWithIndex,
                pagination: {
                    totalItems,
                    totalPages,
                    currentPage: page,
                },
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error fetching Article items:", error);
        return NextResponse.json(
            { error: "Failed to fetch Article items" },
            { status: 500 }
        );
    }
}