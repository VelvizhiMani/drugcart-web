import connectionToDatabase from '../../../../lib/mongodb'
import LabPackage from '../../../../models/LabPackage'
import { authenticateUser, adminAuthorization } from '../../../../utils/middleware';
import { NextResponse } from 'next/server'
import { S3Client, PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';
import { v4 as uuidv4 } from 'uuid';
import connnectionToDatabase from '../../../../lib/mongodb';

const s3 = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
});

function imageFileName(name) {
    return name.trim().replace(/\s+/g, "-").replace(/[^a-zA-Z0-9.\-_]/g, "").toLowerCase();
}

export async function GET(request, { params }) {
    try {
        await connectionToDatabase();
        const { success, user, message } = await adminAuthorization();

        if (!success) {
            return NextResponse.json({ error: message }, { status: 401 });
        }
        const { id } = await params;
        const LabPackageId = await LabPackage.findById(id);
        if (!LabPackageId) {
            return NextResponse.json({ error: 'Lab Package not found' }, { status: 404 });
        }

        return NextResponse.json(LabPackageId, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching Lab Package' }, { status: 500 });
    }
}

export async function PUT(request, { params }) {
    try {
        await connnectionToDatabase();
        const { success, message } = await adminAuthorization();
        if (!success) {
            return NextResponse.json({ error: message }, { status: 401 });
        }

        const { id } = await params;
        const body = await request.json();

        const existingLabPackage = await LabPackage.findById(id);
        if (!existingLabPackage) {
            return NextResponse.json({ error: 'LabPackage not found' }, { status: 404 });
        }

        let newImageKey = existingLabPackage.image;

        // If new image is sent (base64 or blob-like), process it
        if (body.image && typeof body.image === 'object' && body.image.name) {
            const { name, type, data } = body.image; // expects image as { name, type, data (base64) }

            // Upload new image
            const buffer = Buffer.from(data, 'base64');
            const uniqueSuffix = Date.now() + '-' + uuidv4() + '-' + name
            newImageKey = `testpackage/thumb/${imageFileName(uniqueSuffix)}`;

            const uploadParams = {
                Bucket: process.env.AWS_BUCKET_NAME,
                Key: newImageKey,
                Body: buffer,
                ContentType: type,
                ContentDisposition: "inline",
                ACL: "public-read",
            };

            await s3.send(new PutObjectCommand(uploadParams));
            // Delete old image from S3
            //   if (existingLabPackage.image) {
            //     await s3.send(new DeleteObjectCommand({
            //       Bucket: process.env.AWS_BUCKET_NAME,
            //       Key: existingLabPackage.image,
            //     }));
            //   }
        }

        const updatedData = {
            ...body,
            image: newImageKey,
        };

        const updatedLabPackage = await LabPackage.findByIdAndUpdate(id, updatedData, { new: true });

        return NextResponse.json(updatedLabPackage, { status: 200 });
    } catch (error) {
        console.error('PUT error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function DELETE(request, { params }) {
    try {
        const { success, user, message } = await adminAuthorization();

        if (!success) {
            return NextResponse.json({ error: message }, { status: 401 });
        }

        const { id } = await params;
        const deletedLabPackage = await LabPackage.findByIdAndDelete(id);

        if (!deletedLabPackage) {
            return NextResponse.json({ error: 'LabPackage not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Lab Package deleted successfully' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error deleting Lab Package' }, { status: 500 });
    }
}
