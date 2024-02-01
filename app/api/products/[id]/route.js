import { NextResponse } from 'next/server';
import {getProduct} from '@/backend/controllers/productControllers';

export async function GET(request,{params}) {
    const response = await getProduct()
    if(response)
    console.log(response)
   
    return NextResponse.json("Products")
}
