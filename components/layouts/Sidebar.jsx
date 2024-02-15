"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";
import React,{useContext} from "react";
import AuthContext from "@/context/AuthContext";
import { useRouter } from "next/navigation";


const Sidebar = () => {
  
  const router = useRouter();

  const { userData} = useContext(AuthContext);

  const logoutHandler = () => {
    // router.replace('/') { callbackUrl: `${process.env.API_URL}/` }
    signOut();
  };

  const AdminRoutes = [
    {
      name:"New Product",
      route:"/admin/products/new"
    },
    {
      name:"All Products",
      route:'/admin/products'
    },
    {
      name:"All Orders",
      route:"/admin/orders"
    },
    {
      name:"All Users",
      route:"/admin/users"
    },
  ];

  const UserRoutes = [
    {
      name:"Your Profile",
      route:"/me"
    },
    {
      name:"Orders",
      route:"/me/orders"
    },
    {
      name:"Update Profile",
      route:"/me/update"
    },
    {
      name:"Update Password",
      route:"/me/update_password"
    },
  ];

  return (
    <aside className="md:w-1/3 lg:w-1/4 px-4">
      <ul className="sidebar">

        {
        userData?.role==="admin" ?
        (<div>
          {
            AdminRoutes?.map((info,index)=>{
              return(
                <li key={index}>
                  <Link
                    href={info?.route}
                    className="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md">
                    {info?.name} <span className="text-red-500">(Admin)</span>
                  </Link>
                </li>
              )
            })
          }
        </div>) :

        (<div>
          {
            UserRoutes?.map((info,index)=>{
              return(
                <li key={index}>
                  <Link
                    href={info?.route}
                    className="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md">
                    {info?.name}
                  </Link>
                </li>
              )
            })
          }
        </div>)
        }

        <li>
          <a
            className="block px-3 py-2 text-red-800 hover:bg-red-100 hover:text-white-500 rounded-md cursor-pointer"
            onClick={logoutHandler}>
            Logout
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;