"use client";
import Image from "next/image";
import CartContext from "@/context/CartContext";
import { useContext } from "react";

const ProductOverview = ({product}) => {
    const {AddToCart} = useContext(CartContext)
  return (
    <div className="w-[100%] h-[calc(100vh_-_60px)] p-[10px] flex">
        <div className="w-[40%] h-[100%]">
            <div className="w-[100%] h-[75%] relative">
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
            <div className="w-[100%] h-[25%] flex justify-center gap-[10px]">
                <div className="w-[250px] h-[60px] border-[1px] border-black flex justify-center items-center cursor-pointer">
                    <h1>BUY NOW</h1>
                </div>
                <div className="w-[250px] h-[60px] border-[1px] border-black flex justify-center items-center cursor-pointer" onClick={()=>{AddToCart(product)}}>
                    <h1>ADD TO CART</h1>
                </div>
            </div>
        </div>
        <div className="w-[60%] h-[100%]">
            <div>Breadcom</div>
            <div className="text-lg font-bold">{product.name}</div>
            <div className="italic">{product.description}</div>
            <div className="text-xl font-bold text-[#020617]">&#x20b9; {product.price}</div>
            <div >Rating:  <span >{product.ratings} &#9733; </span></div>
            <div>Seller:  {product.seller}</div>
        </div>
    </div>
  )
};


export default ProductOverview;