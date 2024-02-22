"use client";

import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import AuthContext from "@/context/AuthContext";
import CartContext from "@/context/CartContext";
import ProductContext from "@/context/ProductContext";
import queryString from 'query-string';

const Header = () => {
  const [search, setSearch] = useState('');
  const { user, setUser } = useContext(AuthContext);
  const { cart } = useContext(CartContext);
  const {searchProduct} = useContext(ProductContext)

  const { data } = useSession();

  useEffect(() => {
    if (data) {
      setUser(data?.user);
    }
  }, [data]);

  const SearchFilter = () =>{
    searchProduct(search.trim())
    return;
  }

 


  return (
    <>
    {/* Large Screen */}
    <div className="h-[60px] w-[100%] flex border-b-[1px] border-gray-300 large_screen:hidden">

      {/* LOGO + Search */}
      <div className="h-[100%] w-[60%] flex ">
           {/* Logo */}
           <div className="h-[100%] w-[120px] flex items-center justify-center cursor-pointer ml-[10%] ">
              <Link
                href="/">
                  <div className="h-[40px] w-[100px] flex items-center justify-center">
                    <span className="font-Anta font-[400px] text-[#72A9B2] text-[38px]">ECOM</span>
                  </div>
            </Link>
           </div>
            {/* Search */}
            <div className="h-[100%] w-[550px] flex items-center justify-center cursor-pointer ml-[5%] mr-[5px]">
              <div className="h-[40px] w-[100%] flex items-center justify-center gap-0  ">
              <div className="h-[35px] w-[35px] bg-[#e8eaf4] flex items-center rounded-l-[10px]">
                  <Image
                    className="ml-2 h-[35px] bg-[#e8eaf4]"
                    src={"/images/search.svg"}
                    width={20}
                    height={20}
                    alt="search"/>
                </div>
                <input 
                    onChange={(e)=>{setSearch(e.target.value)}}
                    onKeyDown={(e)=>{
                      if(e.key==="Enter")
                      {
                        SearchFilter();
                      }
                    }}
                    type="text" 
                    placeholder="Search Your favorite Product" 
                    className="w-[calc(100%_-_35px)] focus:outline-none font-Poppins h-[35px] rounded-r-[10px] bg-[#e8eaf4]"/>
              </div>
          </div>
      </div>

      {/* CART + LOGIN */}
      <div className="h-[100%] w-[40%] flex ">
            {/* Cart */}
        <div className="h-[100%] w-[120px] flex items-center justify-center cursor-pointer ml-[25%] ">
        <Link
            href="/cart">
            <div className="h-[40px] w-[100px] flex bg-black rounded-[30px]">
              <div className="h-[100%] w-[30px] flex items-center">
                <Image
                  className="ml-2 h-[calc(100%_-_10px)] "
                  src={"/images/cart.svg"}
                  width={60}
                  height={60}
                  alt="cart"/>
              </div>
              <div className="h-[100%] w-[calc(100%_-_30px)] flex justify-center items-center ">
                <span className="text-white text-[12.5px]">{ `${cart?.length || 0} Items`}</span>
              </div>
            </div>
          </Link>
        </div>
        {/* Login */}
        {!user ? (
        <div className="h-[100%] w-[120px] flex items-center justify-center cursor-pointer ml-[15px] ">
        <Link
            href="/login">
            <div className="h-[40px] w-[100px] flex bg-white ">
              <div className="h-[100%] w-[30px] flex items-center">
                <Image
                  className="h-[calc(100%_-_10px)] "
                  src={"/images/profile.svg"}
                  width={60}
                  height={60}
                  alt="cart"/>
              </div>
              <div className="h-[100%] w-[calc(100%_-_30px)] flex justify-center items-center ">
                <span className="text-black text-[15px] font-Poppins">Login</span>
              </div>
            </div>
          </Link>
        </div>) : (
          <div className="h-[100%] w-[120px] flex items-center justify-center cursor-pointer ml-[15px] ">
           <Link  href={user?.role==="admin" ? "/admin": "/profile"}>
             <div className="h-[40px] w-[100px] flex bg-white ">
              <div className="h-[100%] w-[30px] flex items-center">
                <Image
                  className="h-[calc(100%_-_10px)] "
                  src={"/images/profile.svg"}
                  width={60}
                  height={60}
                  alt="cart"/>
              </div>
              <div className="h-[100%] w-[calc(100%_-_30px)] flex justify-center items-center ">
                <div className="text-black text-[15px] font-Poppins">{user?.name}</div>
              </div>
            </div>
           </Link>
           </div>
        ) }
      </div>

    </div>


    {/* Small Screen */}
    <div className="h-[60px] w-[100%] border-b-[1px] border-gray-300 small_screen:hidden">
      {/* LOGO + CART + SIGNIN */}
        <div className="h-[30px] w-[100%] flex items-center justify-center p-[1.5px] ">
          {/* LOGO */}
          
            <div className="h-[100%] w-[30vw] flex justify-center items-center">
              <Link
              href="/">
                <span className="font-Anta font-[400px] text-[#72A9B2] text-[20px]">ECOM</span>
              </Link>
            </div>
          <div className="h-[100%] w-[70vw] flex justify-end">
            {/* CART */}
            <div className="h-[100%] w-[80px]  mr-2">
            <Link
              href="/cart">
                <div className="h-[100%] w-[80px] bg-black flex items-center rounded-[30px]">
                  <div className=" ml-2 h-[calc(100%_-_5px)] w-[35px] rounded-[50px] ">
                      <Image
                          className=" h-[100%] w-[100%] "
                          src={"/images/cart.svg"}
                          width={10}
                          height={10}
                          alt="cart"/>
                  </div>
                  <div className="h-[100%] w-[calc(100%_-_35px)] ">
                      <span className="text-white text-[8.5px]">{ `${cart?.length || 0} Items`}</span>
                  </div>
                </div>
              </Link>
            </div>
            {/* SIGNIN */}
            <div className="h-[100%] w-[100px] ">
            {!user ? (
              <div className="h-[100%] w-[60px] flex items-center  cursor-pointer">
              <Link
                  href="/login">
                  <div className="h-[100%] w-[60px] flex bg-white ">
                    <div className="h-[100%] w-[30px] flex items-center">
                      <Image
                        className="h-[calc(100%_-_10px)] "
                        src={"/images/profile.svg"}
                        width={20}
                        height={20}
                        alt="cart"/>
                    </div>
                    <div className="h-[100%] w-[calc(100%_-_30px)] flex justify-center items-center ">
                      <span className="text-black text-[15px] font-Poppins">Login</span>
                    </div>
                  </div>
                </Link>
              </div>) : (
                <div className="h-[100%] w-[60px] flex items-center  cursor-pointer">
                <Link  href={user?.role==="admin" ? "/admin": "/profile"}>
                  <div className="h-[100%] w-[60px] flex bg-white ">
                    <div className="h-[100%] w-[30px] flex items-center">
                      <Image
                        className="h-[calc(100%_-_10px)] "
                        src={"/images/profile.svg"}
                        width={20}
                        height={20}
                        alt="cart"/>
                    </div>
                    <div className="h-[100%] w-[calc(100%_-_30px)] flex items-center ">
                      <div className="text-black text-[15px] font-Poppins">{user?.name}</div>
                    </div>
                  </div>
                </Link>
                </div>
              ) }
            </div>

          </div>
        </div>

        {/* SEARCH */}
        <div className="h-[30px] w-[100%] flex justify-center">
          <div className="h-[30px] w-[calc(100%_-_20px)] flex  cursor-pointer  p-[2px]">
            <div className="w-[30px] h-[100%] flex items-center rounded-l-[10px] bg-[#e8eaf4]">
              <Image
                className="h-[calc(100%_-_10px)] w-[calc(100%_-_10px)] rounded-l-[10px] "
                src={"/images/search.svg"}
                width={5}
                height={5}
                alt="search"/>     
            </div>
            <div className="w-[calc(100%_-_30px)] h-[100%] flex items-center  rounded-r-[10px] bg-[#e8eaf4]">
                <input 
                      type="text" 
                      placeholder="Search Your favorite Product" 
                      onChange={(e)=>{setSearch(e.target.value)}}
                    onKeyDown={(e)=>{
                      if(e.key==="Enter")
                      {
                        SearchFilter();
                      }
                    }}
                      className="h-[100%] w-[100%] rounded-r-[10px] focus:outline-none bg-[#e8eaf4]"/>
            </div>
          </div>
        </div>
    </div>
    </>
  );
};

export default Header;
