import {updatePassword} from '@/backend/controllers/authControllers'
import { NextResponse } from 'next/server';

export async function POST(request,{params}){
    const info = await request.json();
    const response = await updatePassword(params.id,info.oldPassword,info.newPassword);
    return NextResponse.json({message:'Password Updated'},{status:200, statusText:'success'});
}