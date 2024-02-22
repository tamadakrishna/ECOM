import { NextResponse } from 'next/server'
import { searchProduct } from '@/backend/controllers/productControllers'

export async function GET(request,response) {
    const name = request.nextUrl.searchParams.get('name')

    const Products = await searchProduct(name)

    if(Products)
    return NextResponse.json(Products,{statusText:'success'})

    return NextResponse.json({message:"Not Found"},{statusText:'failed'})

}