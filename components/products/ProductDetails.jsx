"use client";
import Image from "next/image";
import CartContext from "@/context/CartContext";
import { useContext, useEffect } from "react";
import ProductContext from "@/context/ProductContext";
import Loading from "@/components/layouts/Loading";
import toast from 'react-hot-toast';
import { useRouter } from "next/navigation";

const ProductDetails = ({productId}) => {
  const router = useRouter();
  const { loading, productDetails, getProduct} = useContext(ProductContext);
  const {AddToCart} = useContext(CartContext)

    const notify = () => toast.success('Successfully added');


  useEffect(()=>{
    getProduct(productId);
  },[])

  return (
    <>
    {
        loading ?
        <div className="laptop:w-[100%] laptop:h-[calc(100vh_-_60px)] laptop:p-[10px] laptop:flex laptop:justify-center laptop:items-center">
            <Loading/>
        </div>
        : <div className="laptop:w-[100%] laptop:h-[calc(100vh_-_60px)] laptop:p-[10px] laptop:flex 
                          mobile:block mobile:w-[100vw] mobile:h-[calc(100vh_-_60px)] mobile:p-[3px]">

            <div className="laptop:w-[40%] laptop:h-[100%] 
                            mobile:w-[100%] mobile:h-[250px] mobile:border-b-[1px] mobile:border-gray-300">
                <div className="laptop:w-[100%] laptop:h-[75%] laptop:relative
                                mobile:w-[100%] mobile:h-[200px] mobile:px-[40px] mobile:flex mobile:items-center mobile:justify-center ">
                    <div className="mobile:w-[300px] mobile:h-[150px] mobile:relative">
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
                </div>
                <div className="laptop:w-[100%] laptop:h-[25%] laptop:flex laptop:justify-center laptop:gap-[10px]
                                mobile:w-[100%] mobile:h-[50px] mobile:flex mobile:justify-center mobile:gap-[10px]">
                    <div className="bg-orange-400 laptop:w-[250px] laptop:h-[60px] laptop:rounded-[50px] laptop:flex laptop:justify-center laptop:items-center laptop:cursor-pointer
                                    mobile:w-[250px] mobile:h-[40px] mobile:rounded-[50px]"
                                    onClick={()=>{
                                      AddToCart(productDetails);
                                      router.push('/shipping');
                                      }}>
                        <h1 className="text-[#020617]">Buy Now</h1>
                    </div>
                    <div className="bg-yellow-400 laptop:w-[250px] laptop:h-[60px] laptop:rounded-[50px]  laptop:flex laptop:justify-center laptop:items-center laptop:cursor-pointer
                                    mobile:w-[250px] mobile:h-[40px] mobile:rounded-[50px]" onClick={()=>{AddToCart(productDetails); notify();}}>
                        <h1 className="text-[#020617]">Add to Cart</h1>
                    </div>
                </div>
            </div>

            <div className="laptop:w-[60%] laptop:h-[100%] laptop:px-[5px] 
                            mobile:w-[100%] mobile:h-[calc(100%_-_250px)] mobile:overflow-y-scroll">
                <div className="text-lg font-bold text-[#020617]">{productDetails?.name}</div>
                <div className="text-xl font-bold text-[#020617]">MRP &#x20b9; {productDetails?.price}</div>
                <div className="italic text-[#020617]">{productDetails?.description}</div>
                <div className="text-[#020617] text-[20px]">Rating:  <span className="text-[#020617]">{productDetails?.ratings} &#9733; </span></div>
                <div className="text-[#020617] text-[20px]">Seller:  {productDetails?.seller}</div>
            </div>

          </div>
    }
    </>
  )
};


export default ProductDetails;