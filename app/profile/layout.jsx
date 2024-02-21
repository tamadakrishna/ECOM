"use client"
import UserMenu from "@/components/layouts/UserMenu";
import AuthContext from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect } from "react";
import toast from 'react-hot-toast';


export default function AdminLayout({ children }) {
  const { user } = useContext(AuthContext);

  const router = useRouter();

  if(user===null){
    toast.error('Please Login...')
  }
  useEffect(()=>{
    if(user===null){
      router.push('/')
    }
  },[user])
  
  return (
    <>
      {/* Small Screen */}
       <div className="w-[100vw] h-[calc(100vh_-_60px)] bg-gray-100 mobile:p-[3px] small_screen:hidden">
        <div className="w-[100%] h-[30px] ">
          <UserMenu user={user}/>
        </div>
        <div className="w-[100%] h-[calc(100%_-_30px)]">
          {children}
        </div>
      </div>

      {/* Large Screen */}
      <div className="w-[100vw] h-[calc(100vh_-_60px)] flex bg-gray-100 mobile:p-[3px] large_screen:hidden">
        <div className="w-[250px] h-[100%] border border-r-gray-800 ">
          <UserMenu user={user}/>
        </div>
        <div className="w-[calc(100%_-_250px)] h-[100%] ">
          {children}
        </div>
      </div>
    </>
  );
}
