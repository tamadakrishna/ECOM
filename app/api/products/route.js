import { NextResponse } from 'next/server';
import {getProducts} from '@/backend/controllers/productControllers';

export async function GET(request,{params}) {

    const page = request.nextUrl.searchParams.get('page')

    const products = await getProducts(page);

    return NextResponse.json(products)
} 

export const revalidate = 10;