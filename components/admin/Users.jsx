"use client";

import Link from "next/link";
import React, { useContext,useEffect} from "react";
import AuthContext from "@/context/AuthContext";
import Pagination from "@/components/layouts/Pagination";

const Users = () => {
  const { users,getUsers, deleteUser } = useContext(AuthContext);

  useEffect(()=>{
    getUsers();
  },[])

  const deleteHandler = (id) => {
    deleteUser(id);
  };

  return (
    <>
    <div className="w-[100%] h-[100%] ">
      <div className="w-[100%] h-[40px] py-[4px] flex justify-between ">
        <div className="w-[80px] h-[100%] rounded-[5px] flex items-center justify-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2">Name</div>
        <div className="w-[80px] h-[100%] rounded-[5px] flex items-center justify-center text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 font-medium  text-sm px-5 py-2.5 text-center me-2 mb-2">Email</div>
        <div className="w-[80px] h-[100%] rounded-[5px] flex items-center justify-center text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2">Role</div>
        <div className="w-[80px] h-[100%] rounded-[5px] flex items-center justify-center text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2">Actions</div>
      </div>
      <div  className="w-[100%] h-[calc(100%_-_40px)] py-[4px]  overflow-y-scroll ">

      {
        users?.map((user,index)=>{
        return  (
          <div key={index} className="w-[100%] h-[40px] py-[4px] flex justify-between border-gray-400 border-b-[1.5px]">
            <div className="w-[80px] h-[100%] rounded-[5px] flex items-center justify-start "><span className="text-ellipsis text-[#363434] overflow-hidden ... ">{user?.name}</span></div>
            <div className="w-[80px] h-[100%] rounded-[5px] flex items-center justify-start "><span className="text-ellipsis text-[#363434] overflow-hidden ... ">{user?.email}</span></div>
            <div className="w-[80px] h-[100%] rounded-[5px] flex items-center justify-start "><span className="text-ellipsis text-[#363434] overflow-hidden ... ">{user?.role}</span></div>
            <div className="w-[80px] h-[100%] rounded-[5px] flex items-center justify-start ">
            <div>
                  <Link
                    href={`/admin/users/${"user?._id"}`}
                    className="px-2 py-2 inline-block text-yellow-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer mr-2"
                  >
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                  </svg>

                  </Link>
                  <a
                    className="px-2 py-2 inline-block text-red-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer"
                    onClick={() => deleteHandler(user?._id)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                  </a>
                </div>
            </div>
          </div>)
        }) 
      }
     </div>
    </div>
    </>
  );
};

export default Users;

{/* <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <h1 className="text-3xl my-5 ml-4 font-bold">
        {data?.length} Users
      </h1>
      <table className="w-full text-sm text-left">
        <thead className="text-l text-gray-700 uppercase">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Role
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((user) => (
            <tr key={"user?._id"} className="bg-white">
              <td className="px-6 py-2">{user?.name}</td>
              <td className="px-6 py-2">{user?.email}</td>
              <td className="px-6 py-2">{user?.role}</td>
              <td className="px-6 py-2">
                <div>
                  <Link
                    href={`/admin/users/${"user?._id"}`}
                    className="px-2 py-2 inline-block text-yellow-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer mr-2"
                  >
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                  </svg>

                  </Link>
                  <a
                    className="px-2 py-2 inline-block text-red-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer"
                    onClick={() => deleteHandler(user?._id)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                  </a>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination/>
    </div> */}