import dbConnect from "@/backend/config/dbConnect";
import { newProduct } from "@/backend/controllers/productControllers";
import { NextResponse } from "next/server";


export async function POST(request,{params}){
  dbConnect();
  const RequestBody = await request.json();
  const response = await newProduct(RequestBody)
  console.log(response);
  return NextResponse.json("NEW PRODUCT")
}

