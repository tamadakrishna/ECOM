import { NextResponse } from "next/server";
import {fetchUserOrders} from '@/backend/controllers/orderControllers';

export async function GET(request,{params}){
    const orders = await fetchUserOrders(params.id)
    return NextResponse.json(orders);
}
