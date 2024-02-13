"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Search = () => {
  const [keyword, setKeyword] = useState("");

  const router = useRouter();

  const submitHandler = (e) => {
    e.preventDefault();

    if (keyword) {
      router.push(`/?keyword=${keyword}`);
    } else {
      router.push("/");
    }
  };

  return (
    <form
      className="mobile:flex mobile:w-[100%] mobile:h-[100%] mobile:items-center
                 laptop:flex laptop:w-[100%] laptop:h-[100%] laptop:items-center"
      onSubmit={submitHandler}
    >
      <input
        className="rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary
                   mobile:w-[100%] mobile:h-[100%] mobile:p-[2px]
                   laptop:w-[100%] laptop:h-[100%]"
        type="text"
        placeholder="Search Products"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        required
      />
      <span
         className="cursor-pointer  input-group-text whitespace-nowrap rounded text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
         id="basic-addon2"
         onClick={submitHandler}
         >
         <svg
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 20 20"
             fill="currentColor"
             className="h-[20px] w-[35px]">
             <path
                 fillRule="evenodd"
                 d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                 clipRule="evenodd" />
                
         </svg>
     </span>         
    </form>
  );
};

export default Search;
