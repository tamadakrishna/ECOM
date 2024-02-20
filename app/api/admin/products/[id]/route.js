import dbConnect from "@/backend/config/dbConnect";
import { deleteProduct,updateProduct } from "@/backend/controllers/productControllers";
import { NextResponse } from "next/server";

export async function DELETE(request, {params}){
  dbConnect();

  const Response = await deleteProduct(params.id);
  return NextResponse.json({message:"Product Deleted"},{status:200,statusText:'success'});
} 

export async function  PUT(request,{params}) {
  dbConnect();

  const Data = await request.json();
  updateProduct(params.id,Data);
  return NextResponse.json({message:"Product Updated"},{status:200,statusText:'success'});
}