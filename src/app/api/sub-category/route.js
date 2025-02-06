import { authenticateUser } from '../../../utils/middleware';
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
    
    const { success, user, message } = await authenticateUser();
    console.log(success);

    if (!success) {
        return NextResponse.json({ error: message }, { status: 401 })
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

    try {
        await connnectionToDatabase();
        const isSubCategory = await Subcategory.findOne({ subcat_name });
        if (isSubCategory) {
            return NextResponse.json({ error: 'sub category already exist' }, { status: 401 })
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
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 10;
    const search = searchParams.get("search") || "";

    const filters = search ? { subcat_name: { $regex: search, $options: "i" } } : {};
    console.log(filters);
    try {
        await connnectionToDatabase();
        const skip = (page - 1) * limit;

        const subcategoryItems = await Subcategory.find(filters)
            .skip(skip)
            .limit(limit)

        const totalItems = await Subcategory.countDocuments(filters);
        const totalPages = Math.ceil(totalItems / limit);
        console.log('subcategoryItems', subcategoryItems);

        return NextResponse.json(
            {
                subcategoryItems: subcategoryItems,
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