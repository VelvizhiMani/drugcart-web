import { authenticateUser } from '../../../utils/middleware';
import Generic from '../../../models/Generic';
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

    if (!success) {
        return NextResponse.json({ error: message }, { status: 401 })
    }

    const {
        catnames,
        subname,
        url,
        generices,
        gen_img,
        imagealt,
        description,
        usesofmeds,
        useofbenefits,
        indicat,
        mechanism,
        medicinework,
        contraindications,
        sideeffects,
        faqs,
        pregnancy,
        breastfeeding,
        kidneyproblem:,
        liverdisease,
        asthma,
        takemedicine,
        adult,
        childrenmed,
        elderlymed,
        alcohol,
        heartdisease,
        driving,
        warnings,
        talkdoctor,
        instructions,
        druginteraction,
        drugfood,
        drugdiease,
        fooditems,
        overdose,
        misseddose,
        disposal,
        fasttag,
        refer,
        metatitle,
        metakeyword,
        metadesc
    } = await request.json();

    try {
        await connnectionToDatabase();
        const isCategory = await Generic.findOne({ category_name });
        if (isCategory) {
            return NextResponse.json({ error: 'category already exist' }, { status: 401 })
        }

        const addCategory = new Generic({
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

    const filters = search ? { category_name: { $regex: search, $options: "i" } } : {};

    try {
        await connnectionToDatabase();
        const skip = (page - 1) * limit;

        const categoryItems = await Generic.find(filters)
            .skip(skip)
            .limit(limit)

        const totalItems = await Generic.countDocuments(filters);
        const totalPages = Math.ceil(totalItems / limit);

        return NextResponse.json(
            {
                categories: categoryItems,
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