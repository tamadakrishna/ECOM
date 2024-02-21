"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, useState } from "react";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {

  const [orders, setOrders] = useState(null);
  const [orderDetails, setOrderDetails] = useState(null);
  const [userOrders,setUserOrders] = useState(null);

  const router = useRouter();

  const getAllOrders = async(page)=>{
    try{
      const { data } = await axios.get(`${process.env.API_URL}/api/admin/orders/${page}`);
      setOrders(data);
    }catch(error){
      console.log(error)
    }
    return;
  }

  const getOrderDetails = async(id)=>{
    try{
      const { data } = await axios.get(`${process.env.API_URL}/api/orders/profile/details/${id}`);
      setOrderDetails(data);
    }catch(error){
      console.log(error)
    }
    return;
  }

  const fetchUserOrders = async(id)=>{
    try{
      const { data } = await axios.get(`${process.env.API_URL}/api/orders/profile/${id}`);
      setUserOrders(data);
    }catch(error){
      console.log(error)
    }
    return;
  }

  const placeOrder = async(order)=>{
    try{
      const { data } = await axios.post(`${process.env.API_URL}/api/orders/profile/order/`,order);
      console.log(data)
        localStorage.clear();
    }catch(error){
      console.log(error)
    }
    return
  }
 

  return (
    <OrderContext.Provider
      value={{
        orders,
        orderDetails,
        userOrders,
        getOrderDetails,
        getAllOrders,
        fetchUserOrders,
        placeOrder
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContext;


