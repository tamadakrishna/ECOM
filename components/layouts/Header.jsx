"use client";

import React, { useContext, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import AuthContext from "@/context/AuthContext";
import Search from "./Search";
import CartContext from "@/context/CartContext";


const Header = () => {
  const { user, setUser } = useContext(AuthContext);
  const { cart } = useContext(CartContext);

  const { data } = useSession();

  useEffect(() => {
    if (data) {
      setUser(data?.user);
    }
  }, [data]);


  return (
    <div className="h-[60px] bg-white py-2 border-b laptop:flex laptop:w-[100vw] 
                    mobile:flex  mobile:w-[100vw] mobile:h-[60px] mobile:border-2 mobile:border-gray-400 ">
      <div className="mobile:h-[100%] mobile:w-[20vw] mobile:relative
                      laptop:flex laptop:justify-end laptop:h-[100%] laptop:w-[20vw] laptop:relative ">
        <div className="laptop:w-[150px] laptop:h-[100%] laptop:mr-[20px] laptop:relative">
          <a href="/">
                <Image
                  src="/images/logo.png"
                  fill={true}
                  alt="ECOM"
                />
          </a>
        </div>
      </div>
      <div className="mobile:flex mobile:items-center mobile:w-[60vw] mobile:h-[100%]
                      laptop:flex laptop:w-[40vw] laptop:h-[100%] laptop:py-1">
        <Search />
      </div>
      <div className="mobile:w-[20vw] mobile:flex mobile:items-center laptop:hidden">Menu</div>
      <div className="mobile:hidden 
                      laptop:w-[40vw] laptop:h-[100%] laptop:flex laptop:justify-end ">
        <div className="mobile:hidden
                        laptop:mr-[20px] laptop:flex laptop:items-center">
          <Link
              href="/cart"
              className="px-3 py-2 text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300"
            >
              <span className="hidden laptop:inline ml-1">
              Cart (<b>{cart?.length || 0}</b>)
              </span>
            </Link>
        </div>
        <div className="mobile:hidden
                        laptop:mr-[120px] laptop:flex laptop:items-center">
            {!user ? (
                  <Link
                    href="/login"
                    className="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300"
                  >
                    <i className="text-gray-400 w-5 fa fa-user"></i>
                    <span className="hidden laptop:inline ml-1">Sign in</span>
                  </Link>
                ) : (
                  <Link href="/me">
                    <div className="flex items-center mb-4 space-x-3 mt-4 cursor-pointer">
                      {/* <img
                        className="w-10 h-10 rounded-full"
                        src={
                          user?.avatar ? user?.avatar?.url : "/images/default.png"
                        }
                      /> */}
                      <div className="space-y-1 font-medium">
                        <p>
                          {user?.name}
                          <time className="block text-sm text-gray-500 dark:text-gray-400">
                            {user?.email}
                          </time>
                        </p>
                      </div>
                    </div>
                  </Link>
                )}
        </div>
      </div>
    </div>
  );
};

export default Header;



{/* <div className="flex-shrink-0 mr-5">
            <a href="/">
              <Image
                src="/images/logo.png"
                height="40"
                width="120"
                alt="ECOM"
              />
            </a>
          </div> */}


{/* <div className="flex items-center space-x-2 ml-auto">
<Link
  href="/cart"
  className="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300"
>
  <i className="text-gray-400 w-5 fa fa-shopping-cart">
    
  </i>
  <span className="hidden laptop:inline ml-1">
  Cart (<b>{cart?.length || 0}</b>)
  </span>
</Link>
{!user ? (
  <Link
    href="/login"
    className="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300"
  >
    <i className="text-gray-400 w-5 fa fa-user"></i>
    <span className="hidden laptop:inline ml-1">Sign in</span>
  </Link>
) : (
  <Link href="/me">
    <div className="flex items-center mb-4 space-x-3 mt-4 cursor-pointer">
      <img
        className="w-10 h-10 rounded-full"
        src={
          user?.avatar ? user?.avatar?.url : "/images/default.png"
        }
      />
      <div className="space-y-1 font-medium">
        <p>
          {user?.name}
          <time className="block text-sm text-gray-500 dark:text-gray-400">
            {user?.email}
          </time>
        </p>
      </div>
    </div>
  </Link>
)}
</div> */}