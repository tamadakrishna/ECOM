"use client";

import React from "react";
import './style.css';
import Image from "next/image";
import Link from "next/link";


const ListProducts = ({ data }) => {
  return (
    <div className="showContainer">
        <div className="productFilters"></div>
        <div className="products">
            {
                data?.products?.map((product,index)=>{
                   return (<div className="product mt-2" key={index}>
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
                        <div className="productDescription">
                        <Link
                          href={`/product`}
                          className="hover:text-blue-600">
                            <div>{product.name}</div>
                        </Link>
                            <div>Rating  {product.ratings}</div>
                            <div>&#x20b9; {product.price}</div>
                            <div>{product.description}</div>
                        </div>
                   </div>)
                })
            }
            
        </div>
    </div>
  );
};

export default ListProducts;


