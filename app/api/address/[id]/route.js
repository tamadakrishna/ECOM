import { NextResponse } from 'next/server';
import {updateAddress} from '@/backend/controllers/addressControllers';

export async function PUT(request,{params}) {
    const data = await request.json();

    const response = await updateAddress(params.id,data)
    return NextResponse.json({message:'Address Updated'},{status:200})
}
