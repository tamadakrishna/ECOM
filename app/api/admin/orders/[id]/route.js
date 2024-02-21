import { NextResponse } from "next/server";
import {fetchAllOrders} from '@/backend/controllers/orderControllers';

export async function GET(request,{params}){
    const orders = await fetchAllOrders(params.id)
    return NextResponse.json(orders);
}
