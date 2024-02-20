import {registerUser} from '@/backend/controllers/authControllers'
import { NextResponse } from 'next/server';

export async function POST(request,{params}){
    const RequestBody = await request.json();
    const response = await registerUser(RequestBody);
    return NextResponse.json({message:"user created"},{status:200, statusText:'success'});
}