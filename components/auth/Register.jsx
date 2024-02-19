"use client";

import Link from "next/link";
import React, { useState, useContext } from "react";
import AuthContext from "@/context/AuthContext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from 'react-hot-toast';
import Spinner from "@/components/layouts/Spinner";


const Register = () => {

  const [loading, setLoading] = useState(false)

  const { registerUser} = useContext(AuthContext);

  const router = useRouter();

  const [info,setInfo] = useState({
    name:"",
    email:"",
    password:""
  })


  const submitHandler = (e) => {

    setLoading(true)
    e.preventDefault();

    registerUser({ ...info});

    setInfo({
      name:"",
      email:"",
      password:""
    });

    toast.success('Registered Successfully');

    router.push('/login');

  };

  return (
    <div className="w-[100vw] h-[calc(100vh_-_60px)] flex justify-center">
      <div className="laptop:w-[550px] laptop:h-[550px] laptop:mt-[10px] laptop:flex laptop:flex-col laptop:justify-center
                      mobile:w-[350px] mobile:h-[550px] mobile:mt-[5px] mobile:px-[15px] mobile:flex mobile:flex-col mobile:justify-center">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        
        <Image
          className="mx-auto h-10 w-auto"
          src="/images/logo.png"
          height="40"
          width="120"
          alt="BuyItNow"       
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={submitHandler}>
        <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Full Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                placeholder="Type your name"
                disabled={loading}
                value={info.name}
                onChange={(e) => setInfo({...info,name:e.target.value})}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                type="text"
                placeholder="Type your email"
                disabled={loading}
                value={info.email}
                onChange={(e) => setInfo({...info,email:e.target.value})}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              
            </div>
            <div className="mt-2">
              <input
                disabled={loading}
                type="password"
                placeholder="Type your password"
                minLength={6}
                value={info.password}
                onChange={(e) => setInfo({...info,password:e.target.value})}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {loading ? <Spinner/> : "Register" }  
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
        Already have an account?
            <Link href="/login" className="text-blue-500">
              Sign in
            </Link>
          
        </p>
      </div>
      </div>
    </div>
  );
};

export default Register;
