import dbConnect from "@/backend/config/dbConnect";
import { getUsers } from "@/backend/controllers/authControllers";
import { NextResponse } from "next/server";

export async function GET(request, {params}){
  dbConnect();

  const Users = await getUsers();
  return NextResponse.json(Users);
}
