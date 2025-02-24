import { authenticateUser } from '../../../utils/middleware';
import Blog from '../../../models/Blog';
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
            blogspoturl,
            url,
            description,
            imagealt,
            metatitle,
            metadesc,
            metakeyboard
        } = await request.json();

        const isBlog = await Blog.findOne({ blogname });
        if (isBlog) {
            return NextResponse.json({ error: 'Blog Name already exist' }, { status: 401 })
        }

        const addBlog = new Blog({
            blogname,
            blogimg,
            blogspoturl,
            url,
            description,
            imagealt,
            metatitle,
            metadesc,
            metakeyboard
        });

        await addBlog.save();
        return NextResponse.json(addBlog, { status: 200 })
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

        const BlogItems = await Blog.find(filters)
            .skip(skip)
            .limit(limit)

        const totalItems = await Blog.countDocuments(filters);
        const totalPages = Math.ceil(totalItems / limit);

        const BlogWithIndex = BlogItems.map((item, index) => ({
            ...item.toObject(),
            sno: skip + index + 1,
        }));

        return NextResponse.json(
            {
                blogs: BlogWithIndex,
                pagination: {
                    totalItems,
                    totalPages,
                    currentPage: page,
                },
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error fetching Blog items:", error);
        return NextResponse.json(
            { error: "Failed to fetch Blog items" },
            { status: 500 }
        );
    }
}