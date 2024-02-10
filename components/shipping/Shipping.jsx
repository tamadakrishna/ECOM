"use client";

import React, { useContext, useEffect, useState } from "react";
import AuthContext from "@/context/AuthContext";
import CartContext from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";


const Shipping = ()=> {
  
  const router = useRouter()

  const [selectedAddress, setSelectedAddress] = useState(null);
  const { address, getAddress } = useContext(AuthContext);
  const { cart, summary} = useContext(CartContext);

  useEffect(()=>{
    getAddress();
  },[])

  const addressHandler = (info,index)=>{
    console.log("Selected Address",info);
    setSelectedAddress(index);
  }


  const asyncStripe = loadStripe(process.env.STRIPE_PUBLIC_KEY);
  const handler = async () => {

    try {
      const stripe = await asyncStripe;
      const {data} = await axios.post(`${process.env.API_URL}/api/checkout`,{amount:10})
      console.log('data',data)
      const sessionId  = data.sessionId; 

      const { error } = await stripe.redirectToCheckout({ sessionId });
      // if (error) {
      //   router.push("/error");
      // }
    } catch (err) {
      console.log(err);
      // router.push("/error");
    }
  };
   
  
  return (
    <div className="flex w-screen h-[calc(100vh_-_60px)] border-2 border-gray-800">
      <div className="h-full w-[50%] border-2 border-red-700 flex justify-center items-center">
        <div className="h-[calc(100%_-_200px)] w-[calc(100%_-_200px)] border-2 border-black p-2 overflow-scroll">
          {
            address?.map((info,index)=>{
              return (
                    <div className={`h-[120px] w-full border-2 border-pink-600 mb-1 cursor-pointer ${selectedAddress === index ? "bg-green-200":""}`}
                         key={index} onClick={()=>{addressHandler(info,index)}}>
                      <div className="ml-2">
                        <div>{info?.street}</div>
                        <div>
                          <span>{info?.city}, </span> <span>{info?.state}</span>
                        </div>
                        <div>Phone no: {info?.phoneNo}</div>
                        <div><span>{info?.country}</span> <span>{info?.zipCode}</span></div>
                      </div>
                    </div>
              )
            })
          }
        </div>
      </div>
      <div className="h-full w-[50%] border-2 border-red-700 flex justify-start items-center">
          <div className="h-[calc(100%_-_200px)] w-[calc(100%_-_350px)] border-2 border-black p-4 ">
            <div className="h-[80%] w-[350px] border-2 border-red-400">
              <div>Order Summary</div>
              <div>
                <div>
                  <span>{cart?.length}Items</span>  <span>&#x20b9; {summary?.subTotal}</span>
                </div>
                <div>
                  <span>Promotional Savings</span>  <span>-&#x20b9;{100}</span>
                </div>
                <div>
                  <span>Shipping</span>  <span>&#x20b9;{summary?.shipping}</span>
                </div>
                <div>
                  <span>Estimated Tax</span>  <span>&#x20b9;{summary?.salesTax}</span>
                </div>
                <div>
                  <span>Estimated Total</span>  <span>&#x20b9;{summary?.estimatedTotal}</span>
                </div>
                <div className="w-full h-10 pl-1 pr-1 flex justify-center items-center">
                  <button className="w-full h-full bg-green-800 text-slate-50"
                          onClick={()=>{
                            handler();
                            }}>
                    CHECKOUT
                  </button>
                </div>
              </div>
              
            </div>
          </div>
      </div>
    </div>
  )
}

export default Shipping

// &#x20b9; {summary?.subTotal}
// {summary?.shipping}
// {summary?.salesTax}
// {summary?.estimatedTotal}