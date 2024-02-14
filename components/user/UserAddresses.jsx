"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect } from "react";
import AuthContext from "@/context/AuthContext";


const UserAddresses = () => {
  const router = useRouter()

  const { user, address, getAddress, deleteAddress } = useContext(AuthContext);

  useEffect(()=>{
    getAddress(user?.id);
  },[user])

  return (
    <>
     <div className={`mobile:w-[100vw] h-[calc(100vh_-_60px)] bg-gray-100 mobile:p-[5px] `}>
      <div className="mobile:w-[100%] mobile:h-[100%] ">
        <div className="mobile:w-[100%] mobile:h-[30px] ml-[5px]">
          <h1 className="mobile:w-[100%] mobile:h-[100%] text-[#020617] text-[18px] font-semibold font-Poppins">Your Saved addresses</h1>
        </div>
        {
          address?.map((address,index)=>{
            return (
              <div key={index} className="mobile:mb-[4px] mobile:w-[100%] mobile:h-[255px] mobile:p-[5px] mobile:bg-white mobile:border-[1.2px] rounded-[2px] mobile:border-gray-400">
                  <div className="mobile:w-[100%] mobile:h-[25px]"><span className="text-[#020617] text-[15px] font-semibold uppercase">{address?.name}</span></div>
                  <div className="mobile:w-[100%] mobile:h-[25px]"><span className="text-[#020617] text-[15px] ">{address?.houseno}</span></div>
                  <div className="mobile:w-[100%] mobile:h-[25px]"><span className="text-[#020617] text-[15px] ">{address?.street}, {address?.area}</span></div>
                  <div className="mobile:w-[100%] mobile:h-[25px]"><span className="text-[#020617] text-[15px] uppercase">{address?.city}, {address?.state}</span></div>
                  <div className="mobile:w-[100%] mobile:h-[25px]"><span className="text-[#020617] text-[15px] ">{address?.pincode}</span></div>
                  <div className="mobile:w-[100%] mobile:h-[25px]"><span className="text-[#020617] text-[15px] ">Phone number: {address?.mobile}</span></div>
                  <div className="mobile:w-[100%] mobile:h-[50px] mobile:flex mobile:items-center mobile:px-[10px]">
                  <Link
                      className="mobile:w-[100%]"
                       href={{ pathname: '/address/update', query: { ...address} }}>
                  <div className="mobile:w-[100%] mobile:h-[30px] cursor-pointer bg-yellow-400 rounded-[5px] mobile:flex mobile:justify-center mobile:items-center">
                        <span className="text-[#020617] cursor-pointer">Update address</span>
                  </div>
                  </Link>
                  </div>
                  <div className="mobile:w-[100%] mobile:h-[40px] mobile:flex mobile:items-center mobile:px-[10px]">
                  <div className="mobile:w-[100%] mobile:h-[30px] cursor-pointer bg-yellow-400 rounded-[5px] mobile:flex mobile:justify-center mobile:items-center"
                        onClick={(e)=>{ 
                          deleteAddress(address?._id)
                          }}>
                        <span className="text-[#020617] cursor-pointer">Delete address</span>
                  </div>
                  </div>
            </div>);
          })
        }
      <div className="mobile:flex mobile:items-center mobile:mt-[5px] mobile:mb-[2px] mobile:w-[100%] mobile:h-[40px] mobile:bg-white cursor-pointer mobile:border-[1.2px] rounded-[2px] mobile:border-gray-400"
                        onClick={()=>router.push("/address/new/")}>
                    <span className="text-[#020617] font-semibold text-[15px] cursor-pointer mobile:ml-[8px] ">Add a New Address</span> 
                  </div>
      </div>
    </div>
    </>
    )
};

export default UserAddresses;