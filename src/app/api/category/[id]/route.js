import connectMongoDB from "@/libs/mongodb";
import Category from "@/models/category";
import { NextResponse } from "next/server";

export async function PUT(request, content) {
  const categoryId = content.params.id;
  const filter = { _id: categoryId };
  const payload = await request.json();
  await connectMongoDB();
  const result = await Category.findByIdAndUpdate(filter, payload);
  return NextResponse.json({ result, success: true });
}

export async function GET(request, content) {
  const categoryId = content.params.id;
  const record = { _id: categoryId };
  await connectMongoDB();
  const result = await Category.findById(record);
  return NextResponse.json({ result, success: true });
}

export async function DELETE(request, content) {
  const categoryId = content.params.id;
  const record = { _id: categoryId };
  await connectMongoDB();
  const result = await Category.deleteOne(record);
  return NextResponse.json({ result, success: true });
}

// export async function PUT(request, { params }) {
//   const { id } = params;
//   const { category_name, url } = await request.json();
//   await connectMongoDB();
//   await Category.findByIdAndUpdate(id, {
//     category_name,
//     url,
//   });
//   return NextResponse.json({ message: "Category updated" }, { status: 200 });
// }

// export async function GET(request, { params }) {
//   const { id } = params.id;
//   await connectMongoDB();
//   const category = await Category.findOne({ _id: id });
//   return NextResponse.json({ category }, { status: 200 });
// }
