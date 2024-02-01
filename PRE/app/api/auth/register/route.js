import dbConnect from "@/backend/config/dbConnect";
import { NextResponse } from 'next/server'
import { registerUser } from "@/backend/controllers/authControllers";
// import onError from "@/backend/middlewares/errors";

export async function POST(request) {
    dbConnect();
    // request.json().then((data)=>{
    //     console.log(data)
    // registerUser(data);
    // })
    const Data = await request.json();
    if(Data)
    {
        const response = await registerUser(Data)
        return NextResponse.json(response);
    }
}
