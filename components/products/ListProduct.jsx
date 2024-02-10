"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";


const ListProducts = ({data}) => { 
  return (
    <div className="w-[100%] h-[calc(100vh_-_60px)] p-[10px] flex">
        <div className="w-[250px] h-[100%]"></div>
        <div className="w-[calc(100%_-_250px)] h-{100%] overflow-y-scroll p-1">
            {
                data?.map((product,index)=>{
                   return (<div className="w-[100%] h-[250px] grid grid-cols-[400px_calc((100%_-_400px))] mt-2 border" key={index}>
                        <div className="w-[400px] h-[250px] relative">
                        <Image
                            src={
                              product?.images[0]
                                ? product?.images[0].url
                                : "/images/default_product.png"
                            }
                            alt="product anme"
                            fill={true}
                          />
                        </div>
                        <div className="ml-2">
                        <Link
                          href={`/product/${product?._id}`}
                          className="hover:text-blue-600">
                            <div>
                              <p className="text-lg font-bold">{product.name}</p>
                            </div>
                        </Link>
                            <div >Rating  <span >{product.ratings} &#9733; </span></div>
                            <div className="text-xl font-bold text-[#020617]">&#x20b9; {product.price}</div>
                            <div className="italic">{product.description}</div>
                        </div>
                   </div>)
                })
            }
            
        </div>
    </div>
  );
};

export default ListProducts;


