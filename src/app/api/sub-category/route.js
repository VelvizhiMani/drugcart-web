import { authenticateUser, adminAuthorization } from '../../../utils/middleware';
import Subcategory from '../../../models/SubCategory';
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
        console.log(success);

        if (!success) {
            return NextResponse.json({ error: message }, { status: 400 })
        }

        const {
            cat_name,
            subcat_name,
            url,
            sub_cat_img,
            imagealt,
            metatitle,
            metadesc,
            metakeyboard
        } = await request.json();

        const isSubCategory = await Subcategory.findOne({ subcat_name });
        if (isSubCategory) {
            return NextResponse.json({ error: 'sub category already exist' }, { status: 400 })
        }

        const addSubCategory = new Subcategory({
            cat_name,
            subcat_name,
            url,
            sub_cat_img,
            imagealt,
            metatitle,
            metadesc,
            metakeyboard
        });


        await addSubCategory.save();
        return NextResponse.json(addSubCategory, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}

export async function GET(req) {
    try {
        await connnectionToDatabase();
        const { success, user, message } = await adminAuthorization();
        console.log(success);

        if (!success) {
            return NextResponse.json({ error: message }, { status: 401 })
        }

        const { searchParams } = new URL(req.url);
        const page = parseInt(searchParams.get("page")) || 1;
        const limit = parseInt(searchParams.get("limit")) || 10;
        const search = searchParams.get("search") || "";

        const filters = search ? { subcat_name: { $regex: search, $options: "i" } } : {};
        const skip = (page - 1) * limit;

        const subcategoryItems = await Subcategory.find(filters)
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit)

        const totalItems = await Subcategory.countDocuments(filters);
        const totalPages = Math.ceil(totalItems / limit);

        const subcategoryIndex = subcategoryItems.map((item, index) => ({
            ...item.toObject(),
            sno: skip + index + 1,
        }));

        return NextResponse.json(
            {
                subcategoryItems: subcategoryIndex,
                pagination: {
                    totalItems,
                    totalPages,
                    currentPage: page,
                },
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error fetching sub category items:", error);
        return NextResponse.json(
            { error: "Failed to fetch sub category items" },
            { status: 500 }
        );
    }
}