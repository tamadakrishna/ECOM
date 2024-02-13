"use client";

import { useRouter } from "next/navigation";
import { createContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [summary,setSummary] = useState({
    subTotal:0,
    shipping:40,
    estimatedTotal:0,
    salesTax:0
  });

  useEffect(()=>{
    const CartData = JSON.parse(localStorage.getItem('cart'));
    if(CartData){
      setCart(CartData);
    }
  },[])

  useEffect(()=>{
    cartSummary();
  },[cart])

  const cartSummary = () =>{
    const subTotal = cart?.reduce((accumulator,product)=>{
      return accumulator + (product?.quantity * product?.price);
    },0)
    const quantity = cart?.reduce((accumulator,product)=>{
      return accumulator + product?.quantity;
    },0)
    const salesTax = parseFloat(subTotal * 0.18).toFixed(2);
    const afterSalesTax = parseFloat((subTotal + (subTotal * 0.18)).toFixed(2));
    const shipping = 40;
    setSummary({
      subTotal:subTotal,
      shipping:40,
      estimatedTotal:afterSalesTax,
      salesTax:salesTax,
      quantity:quantity
    });
    return;
  }

  const router = useRouter();

  const AddToCart = async (product)=>{
    console.log("Images",product)
    const Data = {
      id:product._id,
      name:product.name,
      price:product.price,
      quantity:1,
      imageUrl: product?.images[0] ? product?.images[0].url : "/images/default_product.png"
    }

    const existingItemIndex = cart?.findIndex(item => item.id === Data.id);

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity++;
      localStorage.setItem('cart',JSON.stringify(updatedCart));
      setCart(updatedCart);
    } else {
      const UpdatedCart =[...cart, Data];
      localStorage.setItem('cart',JSON.stringify(UpdatedCart));
      setCart(prevCart => [...prevCart, Data]);
    }
    
    return;
  }

  const RemoveFromCart = (id)=>{
    const updatedCart = cart.filter((info)=>{
      return info.id!=id;
    })
    localStorage.setItem('cart',JSON.stringify(updatedCart));
    setCart(updatedCart);

    return;
  }

  const ModifyCart = (id,symbol) =>{
    const existingItemIndex = cart?.findIndex(item => item.id === id);

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      if(symbol==="-")
      {
        updatedCart[existingItemIndex].quantity - 1 > 0 && updatedCart[existingItemIndex].quantity--;
        localStorage.setItem('cart',JSON.stringify(updatedCart));
        setCart(updatedCart);
      }
      else if(symbol==="+")
      {
        updatedCart[existingItemIndex].quantity++;
        localStorage.setItem('cart',JSON.stringify(updatedCart));
        setCart(updatedCart);
      }
    }

    return;
  }


  return (
    <CartContext.Provider
      value={{
        cart,
        summary,
        AddToCart,
        RemoveFromCart,
        ModifyCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;