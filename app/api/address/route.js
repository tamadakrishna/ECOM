import { NextResponse } from 'next/server'
import {getAddresses, newAddress} from '@/backend/controllers/addressControllers'

export async function POST(request) {
    const DATA = await request.json();
   
   const response = await newAddress(DATA);

   if(response)
   return NextResponse.json(response)
}

export async function GET(request) {
        const address = await getAddresses()

        if(address)
        return NextResponse.json(address)
}



