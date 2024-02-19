"use client"

import React, { useState,useContext } from 'react'
import AuthContext from '@/context/AuthContext';

function UpdateProfile({user}) {
  const {updateProfile} = useContext(AuthContext)

  const [info,setInfo] = useState({
    id:user?.id,
    name:user?.name,
    email:user?.email
  })

  return (
    <div className="w-[100%] h-[100%] p-[5px] ">
      <div className="w-[100%] h-[calc(100%_-_60px)] ">

      <div className="mb-[8px] mt-[10px] mobile:w-[100%] ">
          <label className="block mb-[2px] text-[15px] font-semibold text-gray-900">Your Name</label>
          <input type="name" id="name" className="mobile:h-[35px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[2.5px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  required
            value={info.name}
            onChange={(e)=>setInfo({...info,name:e.target.value})}/>
        </div>

        <div className="mb-[8px] mt-[5px] mobile:w-[100%] ">
          <label className="block mb-[2px] text-[15px] font-semibold text-gray-900 ">Your E-mail</label>
          <input type="name" id="name" className="mobile:h-[35px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[2.5px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "  required
            value={info.email}
            onChange={(e)=>setInfo({...info,email:e.target.value})}/>
        </div>

      </div>
      <div className='w-[100%] h-[60px]'>
        <div className="mobile:w-[100%] mobile:h-[35px]  mb-1 cursor-pointer bg-yellow-400 rounded-[5px] mobile:flex mobile:justify-center mobile:items-center"
                          onClick={(e)=>{ updateProfile(info)}}>
              <span className="text-[#020617] cursor-pointer">Update Profile</span>
        </div>
      </div>
    </div>
  )
}

export default UpdateProfile