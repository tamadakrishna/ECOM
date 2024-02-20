"use client";

import Link from "next/link";
import Pagination from "../layouts/Pagination";
import React, { useContext, useEffect, useState } from "react";
import AuthContext from "@/context/AuthContext";
import OrderContext from "@/context/OrderContext"

const Orders = () => {
  const {orders, getAllOrders} = useContext(OrderContext)

  useEffect(()=>{
    getAllOrders();
  },[])

  return (
    <div className="w-[100%] h-[100%] overflow-scroll ">
      <div className="min-w-[480px] h-[40px] ">
        <span className="text-[#252424] font-Poppins font-semibold text-[18px]">All Orders</span>
      </div>
      <div className="min-w-[480px] h-[calc(100%_-_40px)] p-[5px]">

        <div className="min-w-[480px] h-[35px] flex justify-between gap-[2px] border-gray-400 border-b-[1.5px]">

          <div className="w-[80px] h-[30px] flex justify-center items-center "> 
            <span className="text-[#474545] font-Poppins font-medium text-[12px]">Order ID</span>
          </div>

          <div className="w-[80px] h-[30px] flex justify-center items-center "> 
            <span className="text-[#474545] font-Poppins font-medium text-[12px]">Order Date</span>
          </div>

          <div className="w-[80px] h-[30px] flex justify-center items-center "> 
            <span className="text-[#474545] font-Poppins font-medium leading-[10px] text-[12px]">Customer Name</span>
          </div>

          <div className="w-[80px] h-[30px] flex justify-center items-center "> 
            <span className="text-[#474545] font-Poppins font-medium text-[12px]">Status</span>
          </div>

          <div className="w-[80px] h-[30px] flex justify-center items-center "> 
            <span className="text-[#474545] font-Poppins font-medium text-[12px]">Price</span>
          </div>
        </div>

        {
          orders?.map((order,index)=>{
            const originalDate = new Date(order?.orderDate);
            const orderDate = originalDate.toLocaleDateString();

            return(
              <div key={index} className="min-w-[480px] h-[35px] flex justify-between gap-[2px] border-gray-400 border-b-[1.5px]">
                  <div className="w-[80px] h-[30px] flex justify-center items-center "> 
                  <Link
                      className="w-[100%] h-[100%] flex justify-center items-center"
                    href={{
                      pathname: '/admin/orders/orderDetails',
                      query: { id:order?._id },
                    }}>
                    <span className="text-[#4c3daf] font-Poppins  text-[12px]">{order?.orderId}</span>
                    </Link>
                  </div>

                  <div className="w-[80px] h-[30px] flex justify-center items-center "> 
                    <span className="text-[#252424] font-Poppins  text-[12px]">{orderDate}</span>
                  </div>

                  <div className="w-[80px] h-[30px] flex justify-center items-center "> 
                    <span className="text-[#252424] font-Poppins  text-[12px] leading-[12px]">{order?.customerDetails?.name}</span>
                  </div>

                  <div className="w-[80px] h-[30px] flex justify-center items-center "> 
                    <span className="text-[#252424] font-Poppins  text-[12px] leading-[12px]">{order?.orderStatus}</span>
                  </div>

                  <div className="w-[80px] h-[30px] flex justify-center items-center "> 
                    <span className="text-[#252424] font-Poppins  text-[12px] leading-[12px]">&#x20b9;{order?.summary?.estimatedTotal}</span>
                  </div>
                </div>);
          })

        }
        

      </div>
   
    </div>
  );
};

export default Orders;