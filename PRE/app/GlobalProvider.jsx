"use client";


import { SessionProvider } from "next-auth/react";
import { AuthProvider } from "@/context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function GlobalProvider({ children }) {
  return (
    <>
      <ToastContainer position="bottom-right" />
      <AuthProvider>
        <SessionProvider>{children}</SessionProvider>
     </AuthProvider>
    </>
  );
}