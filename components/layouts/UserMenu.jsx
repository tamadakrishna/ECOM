"use client";

import React,{useState, useContext} from 'react'
import Link from "next/link";
import { signOut } from "next-auth/react";
import toast from 'react-hot-toast';
import { useRouter } from "next/navigation";

export default function UserMenu({user}) {

    const [isNavOpen, setIsNavOpen] = useState(false);
    const router = useRouter();

    const logoutHandler = () => {
      signOut();
      toast.success("Successfully logged out..")
      localStorage.clear();
    };

    const UserRoutes = [
      {
        name:"Your Profile",
        route:"/profile"
      },
      {
        name:"Orders",
        route:"/profile/orders"
      },
      {
        name:"Update Profile",
        route:"/profile/update_profile"
      },
      {
        name:"Update Password",
        route:"/profile/update_password"
      },
    ];

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

  return (
    <>
    <section className="MOBILE-MENU flex small_screen:hidden">
          <div
            className="HAMBURGER-ICON space-y-1 mt-2 ml-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <div  className="mobile:flex mobile:pt-[150px] mobile:justify-center mobile:gap-2  mobile:w-[100%] mobile:h-[100vh] ">
            <div>
                  {user?.role==="user" ?
                    (UserRoutes?.map((info,index)=>{
                      return(
                        <li className="list-none" key={index}>
                          <Link
                            href={{ pathname: info?.route, query: { ...user} }}
                            onClick={() => setIsNavOpen(false)}
                            className="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md">
                            {info?.name}
                          </Link>
                        </li>
                      )
                    })) :
                    (AdminRoutes?.map((info,index)=>{
                      return(
                        <li className="list-none" key={index}>
                          <Link
                            href={info?.route}
                            onClick={() => setIsNavOpen(false)}
                            className="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md">
                            {info?.name}
                          </Link>
                        </li>
                      )
                    }))
                  }
                   <li className="list-none">
                    <a
                      className="block px-3 py-2 text-red-800 hover:bg-red-100 hover:text-white-500 rounded-md cursor-pointer"
                      onClick={logoutHandler}>
                      Logout
                    </a>
                  </li>
            </div>
            </div>
          </div>
          <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </section>

    <div className="w-[100%] h-[100%]  large_screen:hidden">
            <div className="w-[100%] h-[100%]">
              <div className="h-[80px] w-[100%] flex items-center p-[1px]">
               <span className=" text-[#CACCDD] text-[20px] ml-5 font-Poppins font-semibold">
                {
                  user?.role==="admin" ? "Admin Dashboard" : `Hi ${user?.name}`
                }
                
                </span>
              </div>
                  {user?.role==="user" ?
                    (UserRoutes?.map((info,index)=>{
                      return(
                        <div key={index}
                                  className={`w-[100%] h-[40px] flex justify-center items-center ${ index%2==0 ? "bg-[#78829B]" : "bg-[#6A758F]"} hover:bg-blue-100 hover:text-blue-500 rounded-[1px] `}>

                          <Link
                            href={{ pathname: info?.route, query: { ...user} }}
                            onClick={() => setIsNavOpen(false)}
                            className="w-[140px] h[100%]  ">
                            <span className=" text-center text-[#CACCDD] font-Poppins text-[15px] font-semibold">{info?.name}</span>
                          </Link>
                        </div>
                      )
                    })) :
                    (AdminRoutes?.map((info,index)=>{
                      return(
                        <div key={index}
                             className={`w-[100%] h-[40px] flex justify-center items-center ${ index%2==0 ? "bg-[#78829B]" : "bg-[#6A758F]"} hover:bg-blue-100 hover:text-blue-500 rounded-[1px] `}>
                          <Link
                            href={info?.route}
                            onClick={() => setIsNavOpen(false)}
                            className="w-[100px] h[100%]  ">
                           <span className=" text-center text-[#CACCDD] font-Poppins text-[15px] font-semibold">{info?.name}</span>
                          </Link>
                        </div>
                      )
                    }))
                  }
                  <div 
                    className="w-[100%] h-[40px] flex justify-center items-center bg-[#78829B] hover:bg-red-100 hover:text-blue-500 rounded-[1px]  cursor-pointer"
                    onClick={logoutHandler}>
                      <div className="w-[100px] h[100%]">
                      <span className=" text-center text-[#CACCDD] font-Poppins text-[15px] font-semibold"> Logout</span>
                      </div>
                  </div>
                   
            </div>
    </div>
    </>
   )
}
