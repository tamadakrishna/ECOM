"use client";

import React from "react";
import './style.css';
import Image from "next/image";
import Link from "next/link";


const ListProducts = ({ data }) => {
  return (
    <div className="showContainer">
        <div className="productFilters"></div>
        <div className="products p-1">
            {
                data?.products?.map((product,index)=>{
                   return (<div className="product mt-2 border" key={index}>
                        <div className="productImage">
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
                        <div className="productDescription ml-2">
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


