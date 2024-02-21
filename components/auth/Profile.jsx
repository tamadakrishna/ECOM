"use client";

import React, { useContext, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import AuthContext from "@/context/AuthContext";
import { useRouter } from "next/navigation";


const Profile = () => {
  const { user, address, getAddress, deleteAddress } = useContext(AuthContext);
  const router = useRouter();

  useEffect(()=>{
    if(user?.role!=="admin")
    getAddress(user?.id);
  },[user])

  return (

    <div className="w-[100%] h-[100%] p-[5px]">
      {/* Disable it for admin */}

        <div className="w-[100%] h-[35px] flex items-center ">
          <span className="text-[#242222] font-semibold font-Poppins text-[20px]">Hi {user?.name}</span>
        </div>
        
        <div className="w-[100%] h-[calc(100%_-_35px)] overflow-y-scroll  ">
        {
              address?.map((address,index)=>{
                return (
                  <div key={index} className="mb-[4px] w-[100%] small_screen:w-[500px] h-[220px] p-[5px] bg-white border-[1.2px] rounded-[2px] border-gray-400">
                      <div className="w-[100%] h-[25px]"><span className="text-[#020617] text-[15px] font-semibold uppercase">{address?.name}</span></div>
                      <div className="w-[100%] h-[25px]"><span className="text-[#020617] text-[15px] ">{address?.houseno}</span></div>
                      <div className="w-[100%] h-[25px]"><span className="text-[#020617] text-[15px] ">{address?.street}, {address?.area}</span></div>
                      <div className="w-[100%] h-[25px]"><span className="text-[#020617] text-[15px] uppercase">{address?.city}, {address?.state}</span></div>
                      <div className="w-[100%] h-[25px]"><span className="text-[#020617] text-[15px] ">{address?.pincode}</span></div>
                      <div className="w-[100%] h-[25px]"><span className="text-[#020617] text-[15px] ">Phone number: {address?.mobile}</span></div>
                      <div className="w-[100%] h-[60px] flex items-center px-[10px]">
                      <div className="w-[200px] h-[50px] flex items-center px-[10px]">
                        <Link
                            className="w-[100%]"
                            href={{ pathname: '/address/update', query: { ...address} }}>
                        <div className="w-[100%] h-[30px] cursor-pointer bg-yellow-400 rounded-[5px] flex justify-center items-center">
                              <span className="text-[#020617] cursor-pointer">Update address</span>
                        </div>
                        </Link>
                      </div>
                        <div className="w-[200px] h-[40px] flex items-center px-[10px]">
                        <div className="w-[100%] h-[30px] cursor-pointer bg-yellow-400 rounded-[5px] flex justify-center items-center"
                              onClick={(e)=>{ 
                                deleteAddress(address?._id)
                                }}>
                              <span className="text-[#020617] cursor-pointer">Delete address</span>
                        </div>
                        </div>
                      </div>
                      
                </div>
                );
              })
            }
            
            <div className="flex items-center mt-[2px] mb-[2px]:w-[100%] small_screen:w-[500px] h-[40px] bg-white cursor-pointer border-[1.2px] rounded-[2px] border-gray-400"
                  onClick={()=>router.push("/address/new/")}>
              <span className="text-[#020617] font-semibold text-[15px] cursor-pointer ml-[8px] ">Add a New Address</span> 
            </div>
        </div>
    </div>
  );
};

export default Profile;