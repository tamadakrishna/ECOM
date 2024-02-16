import { NextResponse } from "next/server";
import {fetchOrder} from '@/backend/controllers/orderControllers';

export async function GET(request,{params}){
    const order = await fetchOrder(params.id)
    return NextResponse.json(order);
}
 