"use client";

import Link from "next/link";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import toast from 'react-hot-toast';
import Spinner from "@/components/layouts/Spinner";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false)

  const router = useRouter();

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true)
    const data = await signIn("credentials", {
      email,
      password,
      redirect:false,
    });
    

    if(data.ok){
      setLoading(false)
      toast.success('Welcome Back!')
      console.log(data)
      router.push('/')
    }else{
      setLoading(false)
      toast.error('Incorrect Password/email..')
      router.push('/login')
    }
  };

  return (
    <div className="w-[100vw] h-[calc(100vh_-_60px)] flex justify-center">
      <div className="laptop:w-[550px] laptop:h-[500px] laptop:mt-[10px] laptop:flex laptop:flex-col laptop:justify-center
                      mobile:w-[350px] mobile:h-[500px] mobile:mt-[-2px] mobile:px-[15px] mobile:flex mobile:flex-col mobile:justify-center">
      <div className="mobile:mx-auto mobile:w-full mobile:max-w-sm">
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

      <div className="mt-10 mobile:mx-auto mobile:w-full mobile:max-w-sm">
        <form className="space-y-6" onSubmit={submitHandler}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                type="text"
                placeholder="Type your email"
                value={email}
                disabled={loading}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 mobile:text-sm mobile:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                type="password"
                placeholder="Type your password"
                minLength={6}
                value={password}
                disabled={loading}
                onChange={(e) => setPassword(e.target.value)}
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
             {loading ? <Spinner/> : "Sign in" }  
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a user?{' '}
          <Link href="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Register
          </Link>
          
        </p>
      </div>
      </div>
    </div>
  );
};

export default Login;
