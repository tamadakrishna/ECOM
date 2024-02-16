import { NextResponse } from "next/server";
import {createOrder, fetchAllOrders} from '@/backend/controllers/orderControllers';

export async function GET(request,{params}){
    const orders = await fetchAllOrders()
    return NextResponse.json(orders);
}


export async function POST(request,{param}){
    const orderData = await request.json();
    const order = await createOrder(orderData);
    return NextResponse.json(order);
}