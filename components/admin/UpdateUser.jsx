"use client";

import { useState } from "react";

const UpdateUser = ()=>{
  const [role, setRole] = useState('');
  return (
    <>
    <div className="w-[100%] h-[30px] border-2 border-red-800">
      
    </div>
    <div className="w-[100%] h-[50px] flex justify-center items-center">
      <div>Role</div>
      <div className="w-[100px] h-[50px]">
          <select className="h-[100%] border-2 border-gray-200 bg-gray-200 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                        value={role}
                        onChange={(e)=>{setRole(e.target.value)}}>
                        {["user","admin"].map((role) => (
                          <option key={role} value={role}>
                            <span className="text-[#020617] font-semibold text-[35px]">{role}</span>
                          </option>
                        ))}
          </select>
        </div>
    </div>
    </>
  )
}

export default UpdateUser;