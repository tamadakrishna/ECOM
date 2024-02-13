"use client";

import React, { useContext } from "react";

import CartContext from "@/context/CartContext";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/navigation'

const Cart = () => {
  const { cart, summary, RemoveFromCart, ModifyCart } = useContext(CartContext);

  const router = useRouter()
  return (
   <>
   <div className="laptop:flex laptop:w-screen laptop:h-[calc(100vh_-_60px)] mobile:hidden">
    <div className="w-4/5 h-100vh pl-1">
      <div className="w-full h-11 border-b-4 border-gray-400">
        <p className="text-[30px] text-gray-500 ml-1">SHOPPING BAG</p>
      </div>
      <div className="flex w-full h-10 border-b-2 border-gray-400">
        <div className="h-full w-2/4  flex justify-center items-center">PRODUCT</div>
        <div className="h-full w-1/4  flex justify-center items-center">PRICE</div>
        <div className="h-full w-1/4  flex justify-center items-center">TOTAL</div>
      </div>
      <div className="w-full h-[calc(100vh_-_145px)] overflow-scroll">
      {
        cart?.map((product,index)=>{
          return(
            <div key={index} className="flex w-full h-40 border-b-2 border-gray-200  mb-2">
              <div className=" flex h-full w-2/4 ">
                <div className="h-full w-[200px] relative">
                  <Image
                      src={
                        product?.imageUrl
                        ? product?.imageUrl
                        : "/images/default_product.png"
                      }
                      alt="product anme"
                      fill={true}
                    />
                </div>
                <div className="h-full w-[calc(100%_-_200px)] flex justify-center items-center">
                  <div>
                  <p>Item name:{product?.name}</p>
                  <p>Item ID: {product?.id}</p>
                  <p>Quantity: {product?.quantity}</p>
                  <div className="flex h-[30px] w-[100%]">
                    <div className="w-[80px] h-full border-2 border-black-500">
                      <button className="w-full h-full" onClick={()=>{RemoveFromCart(product?.id)}}>Remove</button>
                    </div>
                    <div className="flex h-full ml-2">
                      <div className="w-[40px] h-full border-2 border-black-500">
                        <button className="w-full h-full" onClick={()=>{ModifyCart(product?.id, "-")}}>{"-"}</button>
                      </div>
                      <div className="pl-2 pr-2">{product?.quantity}</div>
                      <div className="w-[40px] h-full border-2 border-black-500">
                        <button className="w-full h-full" onClick={()=>{ModifyCart(product?.id, "+")}}>{"+"}</button>
                      </div>
                    </div>
                  </div>
                  </div>  
                </div>
              </div>
              <div className="h-full w-1/4  flex justify-center items-center">&#x20b9; {product?.price}</div>
              <div className="h-full w-1/4  flex justify-center items-center">&#x20b9; {product?.quantity * product?.price}</div>
            </div>
          );
        })
      }
      </div>
    </div>
    <div className="w-1/5 h-100vh bg-gray-100 pl-2">
      
      <div className="w-full h-[300px] mt-10 ">
      <div className="w-full h-10 ">
      <p className="text-[20px] text-gray-600 font-bold">SUMMARY</p>
      </div> 
        <div className="flex w-full h-10 ">
          <div className="w-2/4 h-10 ">SUBTOTAL</div>
          <div className="w-2/4 h-10 "> &#x20b9; {summary?.subTotal}</div>
        </div>
        <div className="flex w-full h-10 ">
          <div className="w-2/4 h-10">Shipping</div>
          <div className="w-2/4 h-10">&#x20b9; {summary?.shipping}</div>
        </div>
        <div className="flex w-full h-10">
          <div className="w-2/4 h-10">Sales Tax</div>
          <div className="w-2/4 h-10">&#x20b9; {summary?.salesTax}</div>
        </div>
        <div className="flex w-full h-10">
          <div className="w-2/4 h-10">ESTIMATED TOTAL</div>
          <div className="w-2/4 h-10">&#x20b9; {summary?.estimatedTotal}</div>
        </div>
        <div className="flex w-full h-10">
          <div className="w-full h-10 pl-1 pr-1 flex justify-center items-center">
            <button className="w-full h-full bg-black text-slate-50"
                    onClick={()=>{router.push("/shipping")}}>
              CHECKOUT
            </button>
            </div>
        </div>
      </div>
      
    </div>
   </div>
   <div className="mobile:w-[100vw] mobile:h-[calc(100vh_-_60px)] overflow-y-scroll ">
      <div className="mobile:w-[100%] mobile:h-[150px] ">
        <div className="mobile:w-[100%] mobile:h-[35px] ">
          <h1 className="text-[#020617] text-[20px] font-bold ml-[6px]"><span className="text-[20px]  font-normal">Subtotal</span> <sup>&#x20b9;</sup>{summary?.subTotal}</h1>
        </div>
        <div className="mobile:w-[100%] mobile:h-[40px]">
          <span className="text-green-800 font-bold ml-[6px]">Your order is eligible for Delivery</span>
        </div>
        
        <div className="mobile:w-[100%] mobile:h-[60px] mobile:flex mobile:items-center mobile:px-[10px]  mobile:border-b-[1px] mobile:border-gray-300 ">
            <div className="mobile:w-[100%] mobile:h-[40px] cursor-pointer bg-yellow-400 rounded-[5px] mobile:flex mobile:justify-center mobile:items-center"
                 onClick={(e)=>{ 
                  router.push("/shipping")
                  }}>
                <span className="text-[#020617] cursor-pointer">Proceed to Checkout ({summary?.quantity})</span>
            </div>
        </div>
      </div>
      {
        cart?.map((product,index)=>{
          return (
            <div key={index} className="mobile:w-[100%] mobile:h-[250px] mobile:mb-1 mobile:flex  laptop:hidden">
            <div className="mobile:w-[150px] mobile:h-[100%] mobile:px-[2px] mobile:flex mobile:items-center ">
              <div className="mobile:w-[100%] mobile:h-[68%] mobile:relative ">
                    <Image
                      src={
                        product?.imageUrl
                        ? product?.imageUrl
                        : "/images/default_product.png"
                      }
                      alt="product anme"
                      fill={true}
                    />
              </div>
            </div>
            <div className="mobile:w-[calc(100%_-_150px)] mobile:h-[100%] mobile:p-[1px]">
              <div className="mobile:w-[100%] mobile:h-[35px] mobile:mb-[1px] font-semibold text-[#020617]">{product?.name}</div>
              <div className="mobile:w-[100%] mobile:h-[35px] mobile:mb-[1px] text-[#020617]">Price: &#x20b9;{product?.price}</div>
              <div className="mobile:w-[100%] mobile:h-[35px] mobile:mb-[1px] text-[#020617]">Quantity: {product?.quantity} unit(s)</div>
              <div className="mobile:w-[100%] mobile:h-[35px] mobile:mb-[1px] text-[#020617]">Total: &#x20b9;{(product?.quantity * product?.price)}</div>
              <div className="mobile:w-[100%] mobile:h-[35px] mobile:mb-[1px] ">
                  <div className="mobile:flex mobile:h-[100%] mobile:w-[100%] mobile:py-[2.5px]">
                      <div className="w-[80px] h-full  border-2 border-black-800">
                        <button className="w-full h-full font-semibold text-[#020617]" onClick={()=>{RemoveFromCart(product?.id)}}>Remove</button>
                      </div>
                      <div className="flex h-full ml-2">
                        <div className="w-[40px] h-full border-2 border-black-500 mobile:flex mobile:justify-center mobile:items-center ">
                          <button className="w-full h-full font-semibold text-[#020617] text-[20px]" onClick={()=>{ModifyCart(product?.id, "-")}}>{"-"}</button>
                        </div>
                        <div className="pl-2 pr-2 text-[#020617]">{product?.quantity}</div>
                        <div className="w-[40px] h-full border-2 border-black-500">
                          <button className="w-full h-full font-semibold text-[#020617]" onClick={()=>{ModifyCart(product?.id, "+")}}>{"+"}</button>
                        </div>
                      </div>
                    </div>
              </div>
            </div>
          </div>
          )
        })
      }
     
   </div>
   </>
  );
};

export default Cart;