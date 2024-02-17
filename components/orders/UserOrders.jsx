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
      fetchUserOrders("12345678")
    }
  },[])

  console.log("user orders ",userOrders)
  return (
    <div className="mobile:h-[100%] mobile:w-[100%] px-[5px]">
      <div className="mobile:w-[100%] mobile:h-[30px] ml-[5px]">
          <h1 className="mobile:w-[100%] mobile:h-[100%] text-[#020617] text-[18px] font-semibold font-Poppins">Your Orders</h1>
        </div>
        {
          userOrders?.map((order,index)=>{
            const originalDate = new Date(order?.orderDate);
            const orderDate = originalDate.toLocaleDateString();
            return(
              <Link 
                  key={index}  
                  className="mobile:flex mobile:mt-[5px] mobile:mb-[2px] mobile:w-[100%] mobile:h-[100px] mobile:bg-white cursor-pointer mobile:border-[1.2px] rounded-[2px] mobile:border-gray-400"
                  href={{
                            pathname: '/me/orders/orderDetails',
                            query: { id:order?._id },
                  }}>
                  <div>
                    <div>
                      <span className="text-[#020617]  text-[15px] cursor-pointer mobile:ml-[8px] ">
                        Order Id: {order?.orderId}
                      </span> 
                    </div>
                    <div>
                      <span className="text-[#020617]  text-[15px] cursor-pointer mobile:ml-[8px] ">
                        Order Placed on: {orderDate}
                      </span> 
                    </div>
                    <div>
                      <span className="text-[#020617]  text-[15px] cursor-pointer mobile:ml-[8px] ">
                         {order?.orderDetails[0]?.productName} {order?.orderDetails.length>1 ? `+${order?.orderDetails.length} more items` :""}
                      </span> 
                    </div>
                    <div>
                      <span className="text-[#020617] text-[15px] cursor-pointer mobile:ml-[8px] ">
                        Status: {order?.orderStatus}
                      </span> 
                    </div>
                  </div>
              </Link>
            )
          })
        }
     
    </div>
  )
}

export default UserOrders