import { authenticateUser, adminAuthorization } from '../../../utils/middleware';
import TestPackage from '../../../models/TestPackage';
import { NextResponse } from 'next/server';
import connnectionToDatabase from '@/lib/mongodb';

export async function POST(request) {
    try {
        await connnectionToDatabase();
        const { success, user, message } = await adminAuthorization();

        if (!success) {
            return NextResponse.json({ error: message }, { status: 401 })
        }

        const {
            name,
            packageName,
            packageurl,
            testname,
            url,
            nooftest,
            logo,
            image,
            price,
            saleprice,
            discount,
            type,
            required,
            offervalid,
            labdescription,
            description,
            certificates,
            testincludes,
            deliverytiming,
            procedure,
            note,
            status
        } = await request.json();

        const isTestPackage = await TestPackage.findOne({ testname });
        if (isTestPackage) {
            return NextResponse.json({ error: 'Test Name already exist' }, { status: 401 })
        }

        const addTestPackage = new TestPackage({
            name,
            packageName,
            packageurl,
            testname,
            url,
            nooftest,
            logo,
            image,
            price,
            saleprice,
            discount,
            type,
            required,
            offervalid,
            labdescription,
            description,
            certificates,
            testincludes,
            deliverytiming,
            procedure,
            status,
            note,
            userId: user?._id
        });

        await addTestPackage.save();
        return NextResponse.json(addTestPackage, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 10;
    const search = searchParams.get("search") || "";

    const filters = search ? { name: { $regex: search, $options: "i" } } : {};

    try {
        await connnectionToDatabase();

        const skip = (page - 1) * limit;

        const TestPackageItems = await TestPackage.find(filters)
            .skip(skip)
            .limit(limit)

        const totalItems = await TestPackage.countDocuments(filters);
        const totalPages = Math.ceil(totalItems / limit);

        const TestPackageItemsIndex = TestPackageItems.map((item, index) => ({
            ...item.toObject(),
            sno: skip + index + 1,
        }));

        return NextResponse.json(
            {
                test_packages: TestPackageItemsIndex,
                pagination: {
                    totalItems,
                    totalPages,
                    currentPage: page,
                },
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error fetching Test Package:", error);
        return NextResponse.json(
            { error: "Failed to fetch Test Package" },
            { status: 500 }
        );
    }
}