import { NextResponse } from 'next/server';

export default function middleware(request) {

    const AdminRoutes = ["/admin/products/new","/admin/products","/admin/orders","/admin/users"];

    if(AdminRoutes.includes(request.nextUrl.pathname)){
        return NextResponse.redirect(`${process.env.API_URL}`);
    }
  
  return NextResponse.next(); 
}