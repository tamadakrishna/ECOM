import { NextResponse } from 'next/server';
import { Upload_Image } from '../../../../../../backend/controllers/productControllers';


export const POST = async (request,{params})=> {
    const formData = await request.formData();
    const image = formData.get("image");
    Upload_Image(image,params.id)
    if(image)
    return NextResponse.json({ msg: image }, { status: 200 });
}