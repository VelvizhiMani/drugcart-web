import connectMongoDB from "@/libs/mongodb";
import Subcategory from "@/models/subcategory";
import { NextResponse } from "next/server";

export async function POST(request) {
  const {
    cat_name,
    url,
    subcat_name,
    cat_img,
    imagealt,
    metatitle,
    metakeyword,
    metadesc,
  } = await request.json();
  await connectMongoDB();
  await Subcategory.create({
    cat_name,
    url,
    subcat_name,
    cat_img,
    imagealt,
    metatitle,
    metakeyword,
    metadesc,
  });
  return NextResponse.json({ message: "Subcategory Created" }, { status: 201 });
}

export async function GET() {
  let subcategorys = [];
  try {
    await connectMongoDB();
    subcategorys = await Subcategory.find();
  } catch {
    subcategorys = { success: false };
  }
  return NextResponse.json({ subcategorys, success: true });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Subcategory.findByIdAndDelete(id);
  return NextResponse.json({ message: "Subcategory Deleted" }, { status: 200 });
}
