"use client"
import UserMenu from "@/components/layouts/UserMenu";
import AuthContext from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect } from "react";
import toast from 'react-hot-toast';


export default function UserLayout({ children }) {
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
      <div className="mobile:w-[100vw] h-[calc(100vh_-_60px)] bg-gray-100 mobile:p-[3px]">
        <div className="mobile:w-[100%] h-[30px] ">
          <UserMenu user={user}/>
        </div>
        <div className="mobile:w-[100%] mobile:h-[calc(100%_-_30px)] ">
          {children}
        </div>
      </div>
    </>
  );
}