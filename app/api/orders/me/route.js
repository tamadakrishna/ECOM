import { NextResponse } from "next/server";

export async function GET(request,{param}){
    return NextResponse.json({message:"message"});
}