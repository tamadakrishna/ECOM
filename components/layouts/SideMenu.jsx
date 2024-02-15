"use client";

import React,{useState} from 'react'
import Link from "next/link";
import { signOut } from "next-auth/react";

export default function SideMenu({cart,user}) {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const logoutHandler = () => {
      // router.replace('/') { callbackUrl: `${process.env.API_URL}/` }
      signOut();
    };

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
        route:"/me/update_profile"
      },
      {
        name:"Update Password",
        route:"/me/update_password"
      },
    ];

  return (
    <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-1"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-6 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-6 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-6 animate-pulse bg-gray-600"></span>
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
                  {
                    UserRoutes?.map((info,index)=>{
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
                    })
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
   )
}