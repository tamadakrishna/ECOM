import {updateProfile} from '@/backend/controllers/authControllers'
import { NextResponse } from 'next/server';

export async function PUT(request,{params}){
    const RequestBody = await request.json();
    const response = await updateProfile(params.id,RequestBody);
    return NextResponse.json({message:'Profile Updated'},{status:200, statusText:'success'});
}