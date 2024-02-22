"use client";
import React, { useContext, useEffect } from 'react'
import Link from "next/link";
import AuthContext from  '@/context/AuthContext';
import OrderContext from '@/context/OrderContext';

const UserOrders = () => {
  const {user} = useContext(AuthContext);
  const {userOrders, fetchUserOrders} = useContext(OrderContext);

  useEffect(()=>{
    if(user?.id){
      fetchUserOrders(user.id)
    }
  },[])

  return (
    <div className="h-[100%] w-[100%] px-[5px]">
        <div className="w-[100%] h-[30px] ml-[5px]">
          <span className=" text-[#39407a] text-[20px] ml-1 mb-2 font-Poppins font-semibold">Your Orders</span>
        </div>
        <div className="w-[100%] h-[calc(100%_-_30px)] overflow-y-scroll no-scrollbar">        
          {
            userOrders?.map((order,index)=>{
              const originalDate = new Date(order?.orderDate);
              const orderDate = originalDate.toLocaleDateString();
              return(
                <Link 
                    key={index}  
                    className="flex mt-[5px] mb-[2px] w-[100%] h-[100px] bg-white cursor-pointer border-[1.2px] rounded-[2px] border-gray-400"
                    href={{
                              pathname: '/profile/orders/orderDetails',
                              query: { id:order?._id },
                    }}>
                    <div>
                      <div>
                        <span className="text-[#020617]  text-[15px] cursor-pointer ml-[8px] ">
                          Order Id: {order?.orderId}
                        </span> 
                      </div>
                      <div>
                        <span className="text-[#020617]  text-[15px] cursor-pointer ml-[8px] ">
                          Order Placed on: {orderDate}
                        </span> 
                      </div>
                      <div>
                        <span className="text-[#020617]  text-[15px] cursor-pointer ml-[8px] ">
                          {order?.orderDetails[0]?.productName} {order?.orderDetails.length>1 ? `+${order?.orderDetails.length} more items` :""}
                        </span> 
                      </div>
                      <div>
                        <span className="text-[#020617] text-[15px] cursor-pointer ml-[8px] ">
                          Status: {order?.orderStatus}
                        </span> 
                      </div>
                    </div>
                </Link>
              )
            })
          }
        </div>

    </div>
  )
}

export default UserOrders