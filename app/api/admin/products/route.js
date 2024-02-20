import dbConnect from "@/backend/config/dbConnect";
import { newProduct } from "@/backend/controllers/productControllers";
import { NextResponse } from "next/server";


export async function POST(request,{params}){
  dbConnect();
  const RequestBody = await request.json();
  const response = await newProduct(RequestBody)
  return NextResponse.json({message:"Product Created"},{status:200, statusText:'success'})
}

