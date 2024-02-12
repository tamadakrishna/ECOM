"use client";
import Image from "next/image";
import CartContext from "@/context/CartContext";
import { useContext, useEffect } from "react";
import ProductContext from "@/context/ProductContext";
import Loading from "@/components/layouts/Loading";

const ProductDetails = ({productId}) => {
  const { loading, productDetails, getProduct} = useContext(ProductContext);
  const {AddToCart} = useContext(CartContext)

  useEffect(()=>{
    getProduct(productId);
  },[])

  return (
    <>
    {
        loading ?
        <div className="w-[100%] h-[calc(100vh_-_60px)] p-[10px] flex justify-center items-center">
            <Loading/>
        </div>
        : <div className="w-[100%] h-[calc(100vh_-_60px)] p-[10px] flex">
            <div className="w-[40%] h-[100%]">
                <div className="w-[100%] h-[75%] relative">
             <Image
                src={
                    productDetails && productDetails?.images && productDetails?.images.length > 0
                    ? productDetails?.images[0].url
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
                    <div className="w-[250px] h-[60px] border-[1px] border-black flex justify-center items-center cursor-pointer" onClick={()=>{AddToCart(productDetails)}}>
                        <h1>ADD TO CART</h1>
                    </div>
                </div>
            </div>
            <div className="w-[60%] h-[100%]">
                <div>Breadcom</div>
                <div className="text-lg font-bold">{productDetails?.name}</div>
                <div className="italic">{productDetails?.description}</div>
                <div className="text-xl font-bold text-[#020617]">&#x20b9; {productDetails?.price}</div>
                <div >Rating:  <span >{productDetails?.ratings} &#9733; </span></div>
                <div>Seller:  {productDetails?.seller}</div>
            </div>
          </div>
    }
    </>
  )
};


export default ProductDetails;