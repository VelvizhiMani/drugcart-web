import connectMongoDB from "@/libs/mongodb";
import Subcategory from "@/models/subcategory";
import { NextResponse } from "next/server";

// export async function PUT(request, { params }) {
//   const { id } = params;
//   const { subcat_name } = await request.json();
//   await connectMongoDB();
//   await Subcategory.findByIdAndUpdate(id, { subcat_name });
//   return NextResponse.json({ message: "Subcategory updated" }, { status: 200 });
// }
export async function PUT(request, content) {
  const subcategoryId = content.params.id;
  console.log(subcategoryId, "ID");
  const filter = { _id: subcategoryId };
  const payload = await request.json();
  console.log(payload, "PAYLOAD");
  await connectMongoDB();
  const result = await Subcategory.findByIdAndUpdate(filter, payload);
  return NextResponse.json({ result, success: true });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const result = await Subcategory.findOne({ _id: id });
  return NextResponse.json({ result, success: true }, { status: 200 });
}

export async function DELETE(request, content) {
  const subcategoryId = content.params.id;
  const record = { _id: subcategoryId };
  await connectMongoDB();
  const result = await Subcategory.deleteOne(record);
  return NextResponse.json({ result, success: true }, { status: 200 });
}
