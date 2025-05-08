import connectionToDatabase from "../../../../lib/mongodb";
import Product from "../../../../models/Product";
import { authenticateUser, adminAuthorization } from "../../../../utils/middleware";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    await connectionToDatabase();
    // const { success, user, message } = await authenticateUser();

    // if (!success) {
    //   return NextResponse.json({ error: message }, { status: 401 });
    // }

    const { slug } = await params;
    console.log("Fetching product for slug:", slug);

    let product = await Product.findOne({ url: slug });
    if (!product) {
      product = await Product.findById(slug).catch(() => null);
    }

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    console.error("Error fetching product:", error);
    return NextResponse.json({ error: "Error fetching product" }, { status: 500 });
  }
}
export async function PUT(request, { params }) {
  try {
    await connectionToDatabase();

    const { slug } = await params;
    const data = await request.json();

    let product = await Product.findOne({ url: slug });
    if (!product) {
      product = await Product.findById(slug).catch(() => null);
    }

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    Object.keys(data).forEach((key) => {
      product[key] = data[key];
    });

    await product.save();

    return NextResponse.json(product, { status: 200 });

  } catch (error) {
    console.error("Error updating product:", error);
    return NextResponse.json({ error: "Error updating product" }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    await connectionToDatabase();

    const { slug } = await params;

    let product = await Product.findOneAndDelete({ url: slug });

    if (!product) {
      product = await Product.findByIdAndDelete(slug).catch(() => null);
    }

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    console.error("Error deleting product:", error);
    return NextResponse.json({ error: "Error deleting product" }, { status: 500 });
  }
}
