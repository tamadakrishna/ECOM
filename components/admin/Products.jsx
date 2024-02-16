"use client";
import Pagination from "@/components/layouts/Pagination";
import Link from "next/link";
import ProductContext from "@/context/ProductContext";
import { useContext, useEffect } from "react";

const Products = () => {

  const {products, getProducts} = useContext(ProductContext);

  useEffect(()=>{
    getProducts();
  },[])

  return (
    <div className="w-[100%] h-[100%]">
      <div className="w-[100%] h-[40px] ">
      <span className="text-[#171616] font-Poppins font-semibold"> {products?.length} Product(s) </span>
      </div>
      <div className="w-[100%] h-[calc(100%_-_40px)] overflow-y-scroll ">
       <div className="w-[100%] h-[40px] flex justify-between border-gray-400 border-b-[1.5px] mb-2">
        <div className="w-[80px] h-[100%] flex justify-center items-center ">Name</div>
        <div className="w-[80px] h-[100%] flex justify-center items-center ">Stock</div>
        <div className="w-[80px] h-[100%] flex justify-center items-center ">Price</div>
        <div className="w-[80px] h-[100%] flex justify-center items-center ">Actions</div>
       </div>
       {
        products?.map((info,index)=>{
          return(
            <div key={index} className="w-[100%] h-[40px] flex justify-between border-gray-400 border-b-[1.5px]  mb-2">
              <div className="w-[80px] h-[100%] flex justify-center items-center "><span className="text-[#171616]">{info?.name}</span></div>
              <div className="w-[80px] h-[100%] flex justify-center items-center "><span className="text-[#171616]">{info?.stock}</span></div>
              <div className="w-[80px] h-[100%] flex justify-center items-center "><span className="text-[#171616]">&#x20b9;{info?.price}</span></div>
              <div className="w-[80px] h-[100%] flex justify-center items-center ">
              <div className="w-[100%] flex">
                  <Link
                    href={`/admin/products/upload_images/${info?._id}`}
                    className="px-2 py-2 inline-block text-green-600 bg-white shadow-sm border border-gray-200 
                    rounded-md hover:bg-gray-100 cursor-pointer mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                  </Link>

                  <Link
                    href={{
                      pathname: '/admin/products/update_product',
                      query: { ...info },
                    }}
                    className="px-2 py-2 inline-block text-yellow-600 bg-white shadow-sm border border-gray-200 rounded-md 
                              hover:bg-gray-100 cursor-pointer mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                    </svg>
                  </Link>

                  <button
                    onClick={''}
                    className="px-2 py-2 inline-block text-red-600 bg-white shadow-sm border border-gray-200 rounded-md 
                            hover:bg-gray-100 cursor-pointer mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                  </button>
                  
                </div>
              </div>
            </div>
          )
        })
           
       }
      </div>
    </div>
  );
};

export default Products;




{/* <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <h1 className="text-3xl my-5 ml-4 font-bold">
        {data?.length} Products
      </h1>
      <table className="w-full text-sm text-left">
        <thead className="text-l text-gray-700 uppercase">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Stock
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((product, index) => (
            <tr className="bg-white" key={index}>
              <td className="px-6 py-2">{product?.name}</td>
              <td className="px-6 py-2">{product?.stock}</td>
              <td className="px-6 py-2">&#x20b9;{product?.price}</td>
              <td className="px-6 py-2">
                <div>
                  <Link
                    href={`/admin/products/upload_images/${product?._id}`}
                    className="px-2 py-2 inline-block text-green-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer mr-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>

                  </Link>

                  <Link
                    href={{
                      pathname: '/admin/products/update_product',
                      query: { ...product },
                    }}
                    className="px-2 py-2 inline-block text-yellow-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer mr-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                    </svg>
                  </Link>
                  <button
                    onClick={()=>deleteHandler(product._id)}
                    className="px-2 py-2 inline-block text-red-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer mr-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                  </button>
                  
                  
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mb-6">
        <Pagination/>
      </div>
    </div> */}