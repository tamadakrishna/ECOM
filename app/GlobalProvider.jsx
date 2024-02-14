"use client";

import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";
import { ProductProvider } from "@/context/ProductContext";
import { SessionProvider } from "next-auth/react";
import { Toaster } from 'react-hot-toast';

export function GlobalProvider({ children }) {
  return (
    <>
    <Toaster position="top-right" reverseOrder={false}/>
      <AuthProvider>
        <CartProvider>
          <ProductProvider>
            <SessionProvider>{children}</SessionProvider>
          </ProductProvider>
        </CartProvider>
      </AuthProvider>
    </>
  );
}