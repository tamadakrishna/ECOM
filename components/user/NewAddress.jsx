"use client";

import React, { useState, useContext, useEffect } from "react";
import { countries } from "countries-list";
import AuthContext from "@/context/AuthContext";

const NewAddress = ()=>{

  const {user, newAddress} = useContext(AuthContext);

  const [address,setAddress] = useState({
    userid:user?.id,
    name:"",
    mobile:"",
    houseno:"",
    street:"",
    area:"",
    city:"",
    pincode:"",
    state:"",
    country:"",
  })
  
  useEffect(()=>{
    setAddress({...address,userid:user?.id});
  },[user])

  const AddNewAddress = ()=>{
    if(user?.id!==null){
    newAddress(address);

      setAddress({
        userid:"",
        name:"",
        mobile:"",
        houseno:"",
        street:"",
        area:"",
        city:"",
        pincode:"",
        state:"",
        country:"",
      })
    }
    else{
      console.log("login first")
    }
  }

  const countriesList = Object.values(countries);
  return(
    <div className="mobile:w-[100vw] mobile:h-[calc(100vh_-_60px)] border-2 border-gray-800">
      <div className="mobile:w-[100%] mobile:h-[30px] border-b-[1.5px] border-gray-300 ">
        <span className="text-[#020617] font-semibold text-[15px] ">Add a new address</span>
      </div>
      <div className="mobile:w-[100%] mobile:h-[calc(100%_-_30px)] mobile:overflow-y-scroll mobile:px-[10px] ">

        <div className="mb-[8px] mt-[5px] mobile:w-[100%] ">
          <label className="block mb-[2px] text-[15px] font-semibold text-gray-900">Full Name</label>
          <input type="name" id="name" className="mobile:h-[35px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[2.5px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  required
            value={address.name}
            onChange={(e)=>{setAddress({...address, name:e.target.value})}}/>
        </div>

        <div className="mb-[8px] mobile:w-[100%] ">
          <label className="block mb-[2px] text-[15px] font-semibold text-gray-900">Mobile Number</label>
          <input type="mobile" id="mobile" className="mobile:h-[35px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[2.5px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  required 
            value={address.mobile}
            onChange={(e)=>{setAddress({...address, mobile:e.target.value})}}/>
        </div>

        <div className="mb-[8px] mobile:w-[100%] ">
          <label className="block mb-[2px] text-[15px] font-semibold text-gray-900 ">Flat, House no.,</label>
          <input type="house_no" id="house_no" className="mobile:h-[35px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[2.5px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  required 
            value={address.houseno}
            onChange={(e)=>{setAddress({...address, houseno:e.target.value})}}/>
        </div>

        <div className="mb-[8px] mobile:w-[100%] ">
          <label className="block mb-[2px] text-[15px] font-semibold text-gray-900 ">Street</label>
          <input type="street" id="street" className="mobile:h-[35px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[2.5px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "  required 
            value={address.street}
            onChange={(e)=>{setAddress({...address, street:e.target.value})}}/>
        </div>

        <div className="mb-[8px] mobile:w-[100%] ">
          <label className="block mb-[2px] text-[15px] font-semibold text-gray-900 ">Area</label>
          <input type="area" id="area" className="mobile:h-[35px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[2.5px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "  required 
            value={address.area}
            onChange={(e)=>{setAddress({...address, area:e.target.value})}}/>
        </div>

        <div className="mb-[8px] mobile:w-[100%] ">
          <label className="block mb-[2px] text-[15px] font-semibold text-gray-900 ">City</label>
          <input type="city" id="city" className="mobile:h-[35px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[2.5px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "  required
            value={address.city}
            onChange={(e)=>{setAddress({...address, city:e.target.value})}} />
        </div>

        <div className="mb-[8px] mobile:w-[100%] ">
          <label className="block mb-[2px] text-[15px] font-semibold text-gray-900 ">Pincode</label>
          <input type="pincode" id="pincode" className="mobile:h-[35px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[2.5px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "  required 
            value={address.pincode}
            onChange={(e)=>{setAddress({...address, pincode:e.target.value})}}/>
        </div>

        <div className="mb-[8px] mobile:w-[100%] ">
          <label className="block mb-[2px] text-[15px] font-semibold text-gray-900 ">State</label>
          <input type="state" id="state" className="mobile:h-[35px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[2.5px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "  required 
              value={address.state}
              onChange={(e)=>{setAddress({...address, state:e.target.value})}}/>
        </div>

        <div className="mb-[12px] mobile:w-[100%] ">
          <label className="block mb-[2px] text-[15px] font-semibold text-gray-900">Country</label>
          <select className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                      value={address.country}
                      onChange={(e) => setAddress({...address,
                                                    country:e.target.value})}>
                      {countriesList.map((country) => (
                        <option key={country.name} value={country.name}>
                          {country.name}
                        </option>
                      ))}
          </select>
        </div>

        <div className="mobile:w-[100%] mobile:h-[38px] mobile:mb-[10px] cursor-pointer bg-yellow-400 rounded-[5px] mobile:flex mobile:justify-center mobile:items-center"
              onClick={(e)=>{ AddNewAddress(); }}>
            <span className="text-[#020617] cursor-pointer">Add address</span>
        </div>
      </div>
    </div>
  )
}

export default NewAddress