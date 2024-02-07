import dbConnect from "@/backend/config/dbConnect";
import { deleteUser } from "@/backend/controllers/authControllers";
import { NextResponse } from "next/server";

export async function DELETE(request, {params}){
  dbConnect();

  const Response = await deleteUser(params.id);
  return NextResponse.json({message:"success"},{status:200},{statusText:"OK"});
}