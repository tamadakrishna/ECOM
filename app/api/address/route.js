import { NextResponse } from 'next/server'
import {getAddresses} from '@/backend/controllers/addressControllers'

export async function POST(request) {
    
}

export async function GET(request) {
    console.log(request.query)
        const address = await getAddresses(request.body)

        if(address)
        return NextResponse.json(address)
    
}



