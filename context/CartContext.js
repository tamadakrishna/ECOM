"use client";

import { useRouter } from "next/navigation";
import { createContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const UpdateCart = (Data) =>{
    const CartData = JSON.parse(localStorage.getItem('cart'));
    CartData.push(Data)
    localStorage.setItem('cart',JSON.stringify(CartData));
    console.log("ADD TO CART",CartData)
  }

  const router = useRouter();

  const AddToCart = async (product)=>{
    const Data = {
      id:product._id,
      name:product.name,
      price:product.price,
    }
    setCart([...cart,Data]);
    UpdateCart(Data);
    
    return;
  }


  return (
    <CartContext.Provider
      value={{
        AddToCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;