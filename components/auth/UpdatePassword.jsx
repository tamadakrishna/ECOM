"use client";
import React,{useState,useContext} from 'react';
import AuthContext from '@/context/AuthContext';

const UpdatePassword = ({user}) => {

  const { updatePassword } = useContext(AuthContext);
  const [info,setInfo] = useState({
    id:user?.id,
    password:"",
    newPassword:"",
    confirmPassword:""
  })
  return (
    <div className="w-[100%] h-[100%] p-[5px] ">
      <div className="w-[100%] h-[calc(100%_-_60px)] ">

      <div className="mb-[8px] mt-[10px] mobile:w-[100%] ">
          <label className="block mb-[2px] text-[15px] font-semibold text-gray-900 dark:text-white">Current Password</label>
          <input type="name" id="name" className="mobile:h-[35px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[2.5px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required
            value={info.password}
            onChange={(e)=>setInfo({...info,password:e.target.value})}/>
        </div>

        <div className="mb-[8px] mt-[5px] mobile:w-[100%] ">
          <label className="block mb-[2px] text-[15px] font-semibold text-gray-900 dark:text-white">New Password</label>
          <input type="name" id="name" className="mobile:h-[35px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[2.5px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required
            value={info.newPassword}
            onChange={(e)=>setInfo({...info,newPassword:e.target.value})}/>
        </div>

        <div className="mb-[8px] mt-[5px] mobile:w-[100%] ">
          <label className="block mb-[2px] text-[15px] font-semibold text-gray-900 dark:text-white">Confirm New Password</label>
          <input type="name" id="name" className="mobile:h-[35px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[2.5px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required
            value={info.confirmPassword}
            onChange={(e)=>setInfo({...info,confirmPassword:e.target.value})}/>
        </div>

      </div>
      <div className='w-[100%] h-[60px]'>
        <div className="mobile:w-[100%] mobile:h-[35px]  mb-1 cursor-pointer bg-yellow-400 rounded-[5px] mobile:flex mobile:justify-center mobile:items-center"
                          onClick={(e)=>{ updatePassword(info)}}>
              <span className="text-[#020617] cursor-pointer">Update Password</span>
        </div>
      </div>
    </div>
  )
}

export default UpdatePassword