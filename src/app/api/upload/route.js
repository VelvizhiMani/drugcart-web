import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";


const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const fileType = searchParams.get("fileType"); // Get file type from request

  const fileName = `category/${Date.now()}.${fileType.split("/")[1]}`;
  const bucketName = process.env.AWS_BUCKET_NAME;

  const command = new PutObjectCommand({
    Bucket: bucketName,
    Key: fileName,
    ContentType: fileType,
  });
   
  // const signedUrl = await getSignedUrl(s3, command, { expiresIn: 60 });
  const signedUrl = await getSignedUrl(s3, command)
  console.log("signedUrl", signedUrl)
  console.log("fileName", fileName)
  return Response.json({ url: signedUrl, fileName });
}
