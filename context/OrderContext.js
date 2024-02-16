"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, useState } from "react";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {

  const [orders, setOrders] = useState(null);
  const [orderDetails, setOrderDetails] = useState(null);

  const router = useRouter();

  const getAllOrders = async()=>{
    try{
      const { data } = await axios.get(`${process.env.API_URL}/api/orders/me/`);
      setOrders(data);
    }catch(error){
      console.log(error)
    }
    return;
  }

  const getOrderDetails = async(id)=>{
    try{
      const { data } = await axios.get(`${process.env.API_URL}/api/orders/me/details/${id}`);
      setOrderDetails(data);
    }catch(error){
      console.log(error)
    }
    return;
  }
 

  return (
    <OrderContext.Provider
      value={{
        orders,
        orderDetails,
        getOrderDetails,
        getAllOrders
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContext;


