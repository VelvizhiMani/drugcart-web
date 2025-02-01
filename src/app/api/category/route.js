import connectMongoDB from "@/libs/mongodb";
import Category from "@/models/category";
import { NextResponse } from "next/server";

export async function GET() {
  let categorys = [];
  try {
    await connectMongoDB();
    categorys = await Category.find();
  } catch {
    categorys = { success: false };
  }
  return NextResponse.json({ categorys, success: true });
}
// export async function POST(req) {
//   const data = await req.formData();
//   const file = data.get("file");
//   console.log(file, "KKKKKKKKK");
//   if (!file) {
//     return NextResponse.json({ Message: "No image found", success: true });
//   }
//   const byteData = await file.arrayBuffer();
//   const buffer = Buffer.from(byteData);
//   const path = `./public/${file.name}`;
//   writeFile(path, buffer);
//   return NextResponse.json({ Message: "file upload", success: true });
// }

export async function POST(request) {
  await connectMongoDB();
  const payload = await request.json();
  let category = new Category(payload);
  const result = await category.save();
  return NextResponse.json({ result, success: true });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Category.findByIdAndDelete(id);
  return NextResponse.json({ message: "Category Deleted" }, { status: 200 });
}
