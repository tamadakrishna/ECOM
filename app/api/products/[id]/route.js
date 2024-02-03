import { NextResponse } from 'next/server';
import {getProduct} from '@/backend/controllers/productControllers';

export async function GET(request,{params}) {
    const response = await getProduct(params.id)
    return NextResponse.json(response)
}
