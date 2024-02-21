"use client";

import Link from "next/link";
import Pagination from "../layouts/Pagination";
import React, { useContext, useEffect, useState } from "react";
import AuthContext from "@/context/AuthContext";
import OrderContext from "@/context/OrderContext"
import Tabular from "@/components/layouts/Tabluar"

const Orders = () => {
  const {orders, getAllOrders} = useContext(OrderContext)

  useEffect(()=>{
    getAllOrders(1);
  },[])

  const header = [
    {
      title:"Order ID",
      id:"orderId",
      type:"Link"
    },
    {
      title:"Order Date",
      id:"orderDate",
    },
    {
      title:"Customer Name",
      id:"name",
    },
    {
      title:"Status",
      id:"Status"
    },
    {
      title:"Price",
      id:"Price"
    },
  ]

  const data =  orders?.map((order,index)=>{
    const originalDate = new Date(order?.orderDate);
    const orderDate = originalDate.toLocaleDateString();
    return {
      orderId:order?.orderId,
      orderDate:orderDate,
      name:order?.customerDetails?.name,
      Status:order?.orderStatus,
      Price:order?.summary?.estimatedTotal
    }
  });


  return (
    <div className="w-[100%] h-[100%] overflow-scroll no-scrollbar">
      <div className="min-w-[480px] h-[40px] ">
        <span className="text-[#252424] font-Poppins font-semibold text-[18px]">All Orders</span>
      </div>
      <div className="min-w-[480px] h-[calc(100%_-_40px)] p-[5px] no-scrollbar">

        {/* <div className="min-w-[480px] h-[35px] flex justify-between gap-[2px] border-gray-400 border-b-[1.5px]">

          <div className="w-[80px] h-[30px] flex justify-center items-center "> 
            <span className="text-[#474545] font-Poppins font-medium text-[12px] small_screen:text-[18px]">Order ID</span>
          </div>

          <div className="w-[80px] h-[30px] small_screen:w-[100px] flex justify-center items-center "> 
            <span className="text-[#474545] font-Poppins font-medium text-[12px] small_screen:text-[18px]">Order Date</span>
          </div>

          <div className="w-[80px] h-[30px] small_screen:w-[150px] flex justify-center items-center "> 
            <span className="text-[#474545] font-Poppins font-medium leading-[10px] text-[12px] small_screen:text-[18px]">Customer Name</span>
          </div>

          <div className="w-[80px] h-[30px] flex justify-center items-center "> 
            <span className="text-[#474545] font-Poppins font-medium text-[12px] small_screen:text-[18px]">Status</span>
          </div>

          <div className="w-[80px] h-[30px] flex justify-center items-center "> 
            <span className="text-[#474545] font-Poppins font-medium text-[12px] small_screen:text-[18px]">Price</span>
          </div>
        </div> */}

        {/* {
          orders?.map((order,index)=>{
            const originalDate = new Date(order?.orderDate);
            const orderDate = originalDate.toLocaleDateString();

            return(
              <div key={index} className="min-w-[480px] h-[35px] p-[5px] flex justify-between gap-[2px] border-gray-400 border-b-[1.5px]">
                  <div className="w-[80px] h-[30px] flex justify-center items-center "> 
                  <Link
                      className="w-[100%] h-[100%] flex justify-center items-center"
                    href={{
                      pathname: '/admin/orders/orderDetails',
                      query: { id:order?._id },
                    }}>
                    <span className="text-[#4c3daf] font-Poppins  text-[12px] small_screen:text-[14px]">{order?.orderId}</span>
                    </Link>
                  </div>

                  <div className="w-[80px] h-[30px] flex justify-center items-center "> 
                    <span className="text-[#252424] font-Poppins  text-[12px] small_screen:text-[14px]">{orderDate}</span>
                  </div>

                  <div className="w-[80px] h-[30px] flex justify-center items-center "> 
                    <span className="text-[#252424] font-Poppins  text-[12px] leading-[12px] small_screen:text-[14px]">{order?.customerDetails?.name}</span>
                  </div>

                  <div className="w-[80px] h-[30px] flex justify-center items-center "> 
                    <span className="text-[#252424] font-Poppins  text-[12px] leading-[12px] small_screen:text-[14px]">{order?.orderStatus}</span>
                  </div>

                  <div className="w-[80px] h-[30px] flex justify-center items-center "> 
                    <span className="text-[#252424] font-Poppins  text-[12px] leading-[12px] small_screen:text-[14px]">&#x20b9;{order?.summary?.estimatedTotal}</span>
                  </div>
                </div>);
          })

        } */}

        <Tabular header={header} data={data}/>
        
        <div className=" flex justify-end">
          <Pagination method={getAllOrders}/>
        </div>
      </div>
   
    </div>
  );
};

export default Orders;