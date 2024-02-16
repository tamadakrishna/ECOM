"use client";

import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";
import { ProductProvider } from "@/context/ProductContext";
import { OrderProvider } from "@/context/OrderContext";
import { SessionProvider } from "next-auth/react";
import { Toaster } from 'react-hot-toast';

export function GlobalProvider({ children }) {
  return (
    <>
    <Toaster position="top-left" reverseOrder={false}/>
      <AuthProvider>
        <OrderProvider>
          <CartProvider>
            <ProductProvider>
              <SessionProvider>{children}</SessionProvider>
            </ProductProvider>
          </CartProvider>
        </OrderProvider>
      </AuthProvider>
    </>
  );
}