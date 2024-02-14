import { NextResponse } from 'next/server'
import {getAddresses, newAddress, deleteAddress} from '@/backend/controllers/addressControllers'

export async function POST(request) {
    const data = await request.json();
   
   const response = await newAddress(data);

   if(response)
   return NextResponse.json(response)
}

export async function GET(request,response) {
        const userid = request.nextUrl.searchParams.get('userid')

        const address = await getAddresses(userid)

        if(address)
        return NextResponse.json(address)

}

export async function DELETE(request) {
        const data = await request.json();
       const response = await deleteAddress(data.id);
    
       if(response)
       return NextResponse.json(response)
    }


