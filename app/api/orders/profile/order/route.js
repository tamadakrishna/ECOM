import { NextResponse } from "next/server";
import {createOrder} from '@/backend/controllers/orderControllers';

export async function POST(request,{params}){
    const order = await request.json();
    const response = await createOrder(order)
    return NextResponse.json({message:"Order Placed Successfully"},{status:200,statusText:'success'});
}
 