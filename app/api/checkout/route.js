import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";


export async function POST(req) {
    const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY);
    const host = process.env.API_URL;
        const date = new Date().toISOString();

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        "line_items": [
             {
              "price_data": {
                "unit_amount": 100,
                "currency": "inr",
                "product_data": {
                  "name": "INV-2024-02-09T19:16:49.691Z"
                }
              },
              "quantity": "1"
              
              
            }
        ],
        customer_email: "tamadakrishna@gmail.com",
        client_reference_id: "898jhjfd",
        metadata: { city:"sh" },
        mode: "payment",
        billing_address_collection: 'required', 
        cancel_url: `${host}/shipping/payment_cancel`,
        success_url: `${host}/shipping/payment_success`,
      });

   return NextResponse.json({ sessionId: session.id },{status:200});
}