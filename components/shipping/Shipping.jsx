"use client";

import React, { useContext, useEffect, useState } from "react";
import AuthContext from "@/context/AuthContext";
import CartContext from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import Link from "next/link";

const Shipping = ()=> {
  
  const router = useRouter()
  const [nextUI, setNextUI] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const { user, address, getAddress } = useContext(AuthContext);
  const { cart, summary} = useContext(CartContext);

  useEffect(()=>{
    getAddress(user?.id);
  },[user])

  const addressHandler = (info,index)=>{
    setSelectedAddress(index);
  }


  const asyncStripe = loadStripe(process.env.STRIPE_PUBLIC_KEY);
  const handler = async () => {

    try {
      const stripe = await asyncStripe;
      const {data} = await axios.post(`${process.env.API_URL}/api/checkout`,{amount:summary?.estimatedTotal})
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
    <>
    <div className="flex w-screen h-[calc(100vh_-_60px)] border-2 border-gray-800 mobile:hidden">
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

    {/* Address UI */}
    <div className={`mobile:w-[100vw] h-[calc(100vh_-_60px)] bg-gray-100 mobile:p-[5px] ${nextUI ? "mobile:hidden" : ""}`}>
      <div className="mobile:w-[100%] mobile:h-[100%] ">
        <div className="mobile:w-[100%] mobile:h-[30px] ml-[5px]">
          <h1 className="mobile:w-[100%] mobile:h-[100%] text-[#020617] text-[18px] font-semibold font-Poppins">Select a delivery address</h1>
        </div>
        {
          address?.map((address,index)=>{
            const fullAddress = `${address.houseno} ${address.street} ${address.area} ${address.city} ${address?.state} ${address?.pincode}`
            return (
              <div key={index} className="mobile:mb-[4px] mobile:w-[100%] mobile:h-[220px] mobile:p-[5px] mobile:bg-white mobile:border-[1.2px] rounded-[2px] mobile:border-gray-400">
                  <div className="mobile:w-[100%] mobile:h-[25px]"><span className="text-[#020617] text-[15px] font-semibold uppercase">{address?.name}</span></div>
                  <div className="mobile:w-[100%] mobile:h-[25px]"><span className="text-[#020617] text-[15px] ">{address?.houseno}</span></div>
                  <div className="mobile:w-[100%] mobile:h-[25px]"><span className="text-[#020617] text-[15px] ">{address?.street}, {address?.area}</span></div>
                  <div className="mobile:w-[100%] mobile:h-[25px]"><span className="text-[#020617] text-[15px] uppercase">{address?.city}, {address?.state}</span></div>
                  <div className="mobile:w-[100%] mobile:h-[25px]"><span className="text-[#020617] text-[15px] ">{address?.pincode}</span></div>
                  <div className="mobile:w-[100%] mobile:h-[25px]"><span className="text-[#020617] text-[15px] ">Phone number: {address?.mobile}</span></div>
                  <div className="mobile:w-[100%] mobile:h-[60px] mobile:flex mobile:items-center mobile:px-[10px]">
                 
                  <Link 
                      key={index}  
                      className="mobile:w-[100%] mobile:h-[40px] cursor-pointer bg-yellow-400 rounded-[5px] mobile:flex mobile:justify-center mobile:items-center"
                      href={{
                                pathname: '/shipping/summary',
                                query: { address:fullAddress, mobile: address.mobile, name:address.name},
                      }}>
                  
                        <span className="text-[#020617] cursor-pointer">Deliver to this address</span>
                    </Link>
                  </div>
            </div>);
          })
        }
        
        <div className="mobile:flex mobile:items-center mobile:mt-[2px] mobile:mb-[2px] mobile:w-[100%] mobile:h-[40px] mobile:bg-white cursor-pointer mobile:border-[1.2px] rounded-[2px] mobile:border-gray-400"
              onClick={()=>router.push("/address/new/")}>
          <span className="text-[#020617] font-semibold text-[15px] cursor-pointer mobile:ml-[8px] ">Add a New Address</span> 
        </div>
      </div>
    </div>

    
    </>
  )
}

export default Shipping
