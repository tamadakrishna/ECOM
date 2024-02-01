import dbConnect from "@/backend/config/dbConnect";
// import onError from "@/backend/middlewares/errors";
// import { isAuthenticatedUser } from "@/backend/middlewares/auth";
import { checkoutSession } from "@/backend/controllers/orderControllers";
import { NextResponse } from "next/server";


dbConnect();

export async function POST(request,{param}){
    const body = await request.json();
    const response = await checkoutSession(body)
    return NextResponse.json(response)
}

// router.use(isAuthenticatedUser).post(checkoutSession);

// export default router.handler();