import { NextResponse } from 'next/server';
import {getProducts} from '@/backend/controllers/productControllers';

export async function GET(request,{params}) {

    const products = await getProducts(params);

    return NextResponse.json(products)
} 
