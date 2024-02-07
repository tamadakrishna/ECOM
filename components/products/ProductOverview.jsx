"use client";
import "./overviewStyle.css";
import Image from "next/image";
import CartContext from "@/context/CartContext";
import { useContext } from "react";

const ProductOverview = ({product}) => {
    const {AddToCart} = useContext(CartContext)
  return (
    <div className="product-container">
        <div className="image-container">
            <div className="image-section">
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
            <div className="buyandcart">
                <div className="buy">
                    <h1>BUY NOW</h1>
                </div>
                <div className="cart cursor-pointer" onClick={()=>{AddToCart(product)}}>
                    <h1>ADD TO CART</h1>
                </div>
            </div>
        </div>
        <div className="description-container">
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