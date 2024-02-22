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
      type:"actions",
      Component:({id,info})=>{
        return (
          <div >
             <Link
                      className="w-[100%] h-[100%] flex justify-center items-center"
                    href={{
                      pathname: '/admin/orders/orderDetails',
                      query: { id:info?.id },
                    }}>
                    <span className="text-[#4c3daf] font-Poppins  text-[12px] small_screen:text-[14px]">{info?.orderId}</span>
              </Link>     
          </div>
        )
      }
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
      id:order?._id,
      orderId:order?.orderId,
      orderDate:orderDate,
      name:order?.customerDetails?.name,
      Status:order?.orderStatus,
      Price:order?.summary?.estimatedTotal
    }
  });


  return (
    <div className="w-[100%] h-[100%] overflow-scroll no-scrollbar">
      <div className="min-w-[480px] h-[30px] mt-2">
        <span className=" text-[#39407a] text-[20px] ml-5 mb-2 font-Poppins font-semibold">All Orders</span>
      </div>
      <div className="min-w-[480px] h-[calc(100%_-_40px)] overflow-y-scroll p-2 no-scrollbar">

        <Tabular header={header} data={data}/>
        
        <div className=" flex justify-end">
          <Pagination method={getAllOrders}/>
        </div>

      </div>
    </div>
  );
};

export default Orders;