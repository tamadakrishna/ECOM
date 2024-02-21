"use client";

import React, { useContext, useEffect, useState } from "react";
import AuthContext from "@/context/AuthContext";
import CartContext from "@/context/CartContext";
import OrderContext from '@/context/OrderContext';
import { useRouter } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import Link from "next/link";
import Summary from "@/components/shipping/Summary";
import toast from "react-hot-toast";

const Shipping = ()=> {
  
  const router = useRouter()
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [userInfo, setUserInfo] = useState({
      address:"",
      mobile:"",
      name:"",
  })
  const { user, address, getAddress } = useContext(AuthContext);
  const { cart,setCart, summary, setSummary} = useContext(CartContext);
  const {placeOrder} = useContext(OrderContext)


  useEffect(()=>{
    getAddress(user?.id);
  },[user])

  const addressHandler = (address,index)=>{
    const fullAddress = `${address.houseno} ${address.street} ${address.area} ${address.city} ${address?.state} ${address?.pincode}`;
    const mobile = address.mobile, name=address.name;
    setUserInfo({
      address:fullAddress,
      mobile:mobile,
      name:name
    })
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

  const handleSubmit = () => {
    //Order Details
    const Order_Details = cart?.map((info)=>{
        return {
            "productName":info.name,
            "quantity":info.quantity,
            "price":info.price,
            "total":(info.price * info.quantity)
        }
    });

    // Summary Details
    const SummaryDetails = {
            "subTotal":summary.subTotal,
            "tax":summary.salesTax,
            "shippingCharge":summary.shipping,
            "estimatedTotal":summary.estimatedTotal
        }

    //customerDetails
    const customerDetails = {
        "name":userInfo.name,
        "address":userInfo.address,
        "mobile":userInfo.mobile
    }

    const order = {
        "orderId":Date.now(),
        "userId":user.id,
        "orderDetails":Order_Details,
        "summary":SummaryDetails,
        "customerDetails":customerDetails
    }
    placeOrder(order);
    setCart([]);
    setSummary({
        subTotal:0,
        shipping:40,
        estimatedTotal:0,
        salesTax:0
      })
    router.push('/shipping/payment_success');
    return;
  }

  return (
    <>
    {/* Large Screen UI */}
    <div className="w-[100%] h-[calc(100vh_-_60px)] flex justify-center items-center gap-1  large_screen:hidden">
      {/* Address */}
      <div className="w-[500px] h-[calc(100%_-_100px)] p-[5px] border-2 border-gray-400">
          <div className="w-[100%] h-[50px] border-b-[1.2px] border-gray-400 flex items-center">
                <span className="text-[#020617] text-[20px] font-semibold font-Poppins ">Select Your Address</span>
          </div>
          <div className="w-[100%] h-[calc(100%_-_50px)] overflow-y-scroll no-scrollbar">
              {
                address?.map((info,index)=>{
                  return (
                        <div className={`h-[150px] w-full border-2 border-gray-400 mb-1 cursor-pointer ${selectedAddress === index ? "bg-[#dbdbdb]":""}`}
                            key={index} onClick={()=>{addressHandler(info,index)}}>
                          <div className="ml-2">
                            <div className="mobile:w-[100%] mobile:h-[25px]"><span className="text-[#020617] text-[15px] font-semibold uppercase">{info?.name}</span></div>
                            <div className="mobile:w-[100%] mobile:h-[25px]"><span className="text-[#020617] text-[15px] ">{info?.houseno}</span></div>
                            <div className="mobile:w-[100%] mobile:h-[25px]"><span className="text-[#020617] text-[15px] ">{info?.street}, {info?.area}</span></div>
                            <div className="mobile:w-[100%] mobile:h-[25px]"><span className="text-[#020617] text-[15px] uppercase">{info?.city}, {info?.state}</span></div>
                            <div className="mobile:w-[100%] mobile:h-[25px]"><span className="text-[#020617] text-[15px] ">{info?.pincode}</span></div>
                            <div className="mobile:w-[100%] mobile:h-[25px]"><span className="text-[#020617] text-[15px] ">Phone number: {info?.mobile}</span></div>
                          </div>
                        </div>
                  )
                })
              }
          </div>
      </div>
      {/* Summary */}
      <div className="w-[500px] h-[calc(100%_-_100px)] p-[5px] flex-col justify-between  border-2 border-gray-400">
        <div className="w-[100%] h-[calc(100%_-_50px)] ">
            <div className="w-[100%] h-[50px] border-b-[1.2px] border-gray-400 flex items-center">
                <span className="text-[#020617] text-[20px] font-semibold font-Poppins uppercase">ORDER SUMMARY</span>
            </div>
            <div className="w-[100%] max-h-[150px] border-b-[1.2px] border-gray-400 overflow-y-scroll no-scrollbar">
                  {
                    cart?.map((product,index)=>{
                      return(
                        <div key={index} className="w-[100%] mobile:h-[25px] flex items-center justify-between">
                          <span className="text-[#3f3f41] text-[15px]  font-Poppins ">{product?.quantity} x {product?.name}</span>
                          <span className="text-[#3f3f41] text-[15px]  font-Poppins ">&#x20b9;{product?.quantity * product?.price}</span>
                        </div>
                      );
                    })
                  }
                  
            </div>
            <div className="w-[100%] h-[50px]  border-b-[1.2px] border-gray-400 flex items-center justify-between">
              <span className="text-[#3f3f41] text-[18px]  font-Poppins font-semibold">Subtotal</span>
              <span className="text-[#3f3f41] text-[16px]  font-Poppins ">&#x20b9;{summary.subTotal}</span>
            </div>
            <div className="w-[100%] h-[50px]  border-b-[1.2px] border-gray-400 flex items-center justify-between">
              <span className="text-[#3f3f41] text-[17px]  font-Poppins ">Estimated Tax</span>
              <span className="text-[#3f3f41] text-[16px]  font-Poppins ">&#x20b9;{summary.salesTax}</span>
            </div>
            <div className="w-[100%] h-[50px]  border-b-[1.2px] border-gray-400 flex items-center justify-between">
              <span className="text-[#3f3f41] text-[17px]  font-Poppins ">Shipping</span>
              <span className="text-[#3f3f41] text-[16px]  font-Poppins ">&#x20b9;{summary.shipping}</span>
            </div>
            <div className="w-[100%] h-[50px]  border-b-[1.2px] border-gray-400 flex items-center justify-between">
              <span className="text-[#3f3f41] text-[17px]  font-Poppins ">Estimated Total</span>
              <span className="text-[#3f3f41] text-[16px]  font-Poppins ">&#x20b9;{summary.estimatedTotal}</span>
            </div>
        </div>
        <div className="w-[100%] h-[50px]">
            <div className="w-[100%] h-[40px] cursor-pointer bg-yellow-400 rounded-[5px] flex justify-center items-center"
                onClick={(e)=>{ 
                  if(userInfo.name){handleSubmit()}
                  else { toast.error("Select Shipping address")}
                  }}>
                <span className="text-[#020617] cursor-pointer">Proceed to Pay</span>
            </div>
          </div>
      </div>
    </div>

    {/* Small Screen UI */}
    <div className="w-[100%] h-[calc(100vh_-_60px)] border border-green-800 small_screen:hidden">
          <div className="mobile:w-[100%] mobile:h-[100%]  ">
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