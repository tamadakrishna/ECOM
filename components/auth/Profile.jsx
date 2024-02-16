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
    if(user.role!=="admin")
    getAddress(user?.id);
  },[user])

  return (
    <div className="w-[100%] h-[100%] p-[5px] ">
      <div className="w-[100%] h-[35px] flex items-center ">
        <span className="text-[#242222] font-semibold font-Poppins text-[20px]">Hi {user?.name}</span>
      </div>

      {/* Disable it for admin */}
      <div className="w-[100%] h-[calc(100%-35px)] overflow-y-scroll">
      {
            address?.map((address,index)=>{
              return (
                <div key={index} className="mobile:mb-[4px] mobile:w-[100%] mobile:h-[220px] mobile:p-[5px] mobile:bg-white mobile:border-[1.2px] rounded-[2px] mobile:border-gray-400">
                    <div className="mobile:w-[100%] mobile:h-[25px]"><span className="text-[#020617] text-[15px] font-semibold uppercase">{address?.name}</span></div>
                    <div className="mobile:w-[100%] mobile:h-[25px]"><span className="text-[#020617] text-[15px] ">{address?.houseno}</span></div>
                    <div className="mobile:w-[100%] mobile:h-[25px]"><span className="text-[#020617] text-[15px] ">{address?.street}, {address?.area}</span></div>
                    <div className="mobile:w-[100%] mobile:h-[25px]"><span className="text-[#020617] text-[15px] uppercase">{address?.city}, {address?.state}</span></div>
                    <div className="mobile:w-[100%] mobile:h-[25px]"><span className="text-[#020617] text-[15px] ">{address?.pincode}</span></div>
                    <div className="mobile:w-[100%] mobile:h-[25px]"><span className="text-[#020617] text-[15px] ">Phone number: {address?.mobile}</span></div>
                    <div className="mobile:w-[100%] mobile:h-[60px] mobile:flex mobile:items-center mobile:px-[10px]">
                    <div className="mobile:w-[200px] mobile:h-[50px] mobile:flex mobile:items-center mobile:px-[10px]">
                      <Link
                          className="mobile:w-[100%]"
                          href={{ pathname: '/address/update', query: { ...address} }}>
                      <div className="mobile:w-[100%] mobile:h-[30px] cursor-pointer bg-yellow-400 rounded-[5px] mobile:flex mobile:justify-center mobile:items-center">
                            <span className="text-[#020617] cursor-pointer">Update address</span>
                      </div>
                      </Link>
                    </div>
                      <div className="mobile:w-[200px] mobile:h-[40px] mobile:flex mobile:items-center mobile:px-[10px]">
                      <div className="mobile:w-[100%] mobile:h-[30px] cursor-pointer bg-yellow-400 rounded-[5px] mobile:flex mobile:justify-center mobile:items-center"
                            onClick={(e)=>{ 
                              deleteAddress(address?._id)
                              }}>
                            <span className="text-[#020617] cursor-pointer">Delete address</span>
                      </div>
                      </div>
                    </div>
                    
              </div>);
            })
          }
          
          { user?.role==="user" ? (<div className="mobile:flex mobile:items-center mobile:mt-[2px] mobile:mb-[2px] mobile:w-[100%] mobile:h-[40px] mobile:bg-white cursor-pointer mobile:border-[1.2px] rounded-[2px] mobile:border-gray-400"
                onClick={()=>router.push("/address/new/")}>
            <span className="text-[#020617] font-semibold text-[15px] cursor-pointer mobile:ml-[8px] ">Add a New Address</span> 
          </div>) : ""
          }
      </div>
    </div>
  );
};

export default Profile;