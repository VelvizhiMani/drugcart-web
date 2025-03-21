import { authenticateUser, adminAuthorization } from '../../../utils/middleware';
import LabPackage from '../../../models/LabPackage';
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
            packageName,
            url,
            image,
            alt,
        } = await request.json();

        const isPackageName = await LabPackage.findOne({ packageName });
        if (isPackageName) {
            return NextResponse.json({ error: 'Package Name already exist' }, { status: 401 })
        }

        const addLabPackage = new LabPackage({
            packageName,
            url,
            image,
            alt,
            userId: user?._id
        });

        await addLabPackage.save();
        return NextResponse.json(addLabPackage, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 10;
    const search = searchParams.get("search") || "";

    const filters = search ? { packageName: { $regex: search, $options: "i" } } : {};

    try {
        await connnectionToDatabase();

        const skip = (page - 1) * limit;

        const LabPackageItems = await LabPackage.find(filters)
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit)

        const totalItems = await LabPackage.countDocuments(filters);
        const totalPages = Math.ceil(totalItems / limit);

        const LabPackageItemsIndex = LabPackageItems.map((item, index) => ({
            ...item.toObject(),
            sno: skip + index + 1,
        }));

        return NextResponse.json(
            {
                lab_packages: LabPackageItemsIndex,
                pagination: {
                    totalItems,
                    totalPages,
                    currentPage: page,
                },
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error fetching Lab Package:", error);
        return NextResponse.json(
            { error: "Failed to fetch Lab Package" },
            { status: 500 }
        );
    }
}