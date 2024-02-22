import { NextResponse } from 'next/server'
import { filterProduct } from '@/backend/controllers/productControllers'

export async function GET(request,response) {
    const type = request.nextUrl.searchParams.get('type')

    if(type==="categories"){
        const categories = request.nextUrl.searchParams.get('categories')
        const info = JSON.parse(categories)
    
        const Products = await filterProduct(type,info)
    
        if(Products)
        return NextResponse.json(Products)
    
        return NextResponse.json({message:"Not Found"},{statusText:"not found"})
    }
    if(type==="price"){
        const min = request.nextUrl.searchParams.get('min');
        const max = request.nextUrl.searchParams.get('max');
    
        const Products = await filterProduct(type,{min:min,max:max})
    
        if(Products)
        return NextResponse.json(Products)
    
        return NextResponse.json({message:"Not Found"},{statusText:"not found"})
    }
    

}