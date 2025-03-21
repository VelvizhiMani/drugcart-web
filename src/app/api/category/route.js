import { authenticateUser, adminAuthorization } from '../../../utils/middleware';
import Category from '../../../models/Category';
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
            url,
            category_name,
            cat_type,
            cat_img,
            imagealt,
            metatitle,
            metadesc,
            metakeyboard
        } = await request.json();

        const isCategory = await Category.findOne({ category_name });
        if (isCategory) {
            return NextResponse.json({ error: 'category already exist' }, { status: 401 })
        }

        const addCategory = new Category({
            url,
            category_name,
            cat_type,
            cat_img,
            imagealt,
            metatitle,
            metadesc,
            metakeyboard
        });


        await addCategory.save();
        return NextResponse.json(addCategory, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 10;
    const search = searchParams.get("search") || "";
    const cat_type = searchParams.get("cat_type") || "";

    try {
        await connnectionToDatabase();
        const skip = (page - 1) * limit;

        let query = {};

        if (search) {
            query.category_name = { $regex: search, $options: "i" };
        }

        if (cat_type) {
            query.cat_type = cat_type;
        }

        const categoryItems = await Category.find(query)
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);

        const totalItems = await Category.countDocuments(query);
        const totalPages = Math.ceil(totalItems / limit);

        const categoriesWithIndex = categoryItems.map((category, index) => ({
            ...category.toObject(),
            sno: skip + index + 1,
        }));

        return NextResponse.json(
            {
                categories: categoriesWithIndex,
                pagination: {
                    totalItems,
                    totalPages,
                    currentPage: page,
                },
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error fetching category items:", error);
        return NextResponse.json(
            { error: "Failed to fetch category items" },
            { status: 500 }
        );
    }
}
