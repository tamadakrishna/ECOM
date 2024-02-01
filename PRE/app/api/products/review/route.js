// import dbConnect from "@/backend/config/dbConnect";
// import { createProductReview } from "@/backend/controllers/productControllers";
// import onError from "@/backend/middlewares/errors";
// import { isAuthenticatedUser } from "@/backend/middlewares/auth";

// const router = createRouter();5

// dbConnect();

// router.use(isAuthenticatedUser).put(createProductReview);

// export default router.handler();

import { NextResponse } from 'next/server';

export async function GET(request) {


    return NextResponse.json("products")
} 
