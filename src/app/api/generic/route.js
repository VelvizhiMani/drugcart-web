import { NextResponse } from "next/server";

export async function GET(req, res) {
    return NextResponse.json({
        hello:"World",
    });
   
  }
