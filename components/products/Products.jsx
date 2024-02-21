"use client";

import React, {useContext, useEffect}  from "react";
import Image from "next/image";
import Link from "next/link";
import ProductContext from "@/context/ProductContext";
import Loading from "@/components/layouts/Loading";

const Products = () => { 
  
  const { loading, products, getProducts} = useContext(ProductContext);

  useEffect(()=>{
    getProducts();
  },[])


  return (
    <div
      className="laptop:w-[100%] laptop:h-[calc(100vh_-_60px)] laptop:flex laptop:p-[10px]
                 mobile:w-[100%] mobile:h-[calc(100dvh_-_60px)]">
        <div
          className="laptop:w-[250px] laptop:h-[100%] border 
                     mobile:hidden">
            {/* Filter Widget */}
            <div className="w-[100%] h-[20px] mb-2">
              <span className="text-[15px] font-Poppins ml-4 uppercase font-semibold">Categories</span>
            </div>
            <div className="w-[100%] h-[120px] border-b-[1px] border-b-[#d8d5d5]">
            {
              ["Electronics","Fashion","Books","Food"]?.map((info,index)=>{
                return(
                  <div key={index} className="flex items-center mb-2 ml-4">
                    <input id="default-checkbox" type="checkbox" value={info} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2 "/>
                    <label for="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 ">{info}</label>
                  </div>
                )})
            }
            </div>
            {/* Reviews */}
            <div className="w-[100%] h-[20px] mb-2">
              <span className="text-[15px] font-Poppins ml-4 uppercase font-semibold">Reviews</span>
            </div>
            <div className="w-[100%] h-[140px] border-b-[1px] border-b-[#d8d5d5]">
            {
              [5,4,3,2,1]?.map((info,index)=>{
                return(
                  <div key={index} className="flex items-center mb-1 ml-4">
                      <label for="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 ">
                        <div className="flex">
                          {
                            Array.apply(null, Array(info)).map((item,index)=>{
                              return (
                                 <span key={index} className="text-[22px] text-[#FFA51D]">&#9733;</span>
                              )
                            })
                          }
                        </div>
                        </label>
                  </div>
                )})
            }
            </div>
            {/* Price */}
            <div className="w-[100%] h-[20px] mb-2">
              <span className="text-[15px] font-Poppins ml-4 uppercase font-semibold">Price</span>
            </div>
            <div className="w-[100%] h-[60px] border-b-[1px] border-b-[#d8d5d5]">
              <div className="flex gap-3 h-[100%] mb-1 ml-4 ">
                     <div className="w-[60px] h-[35px]">
                     <input type="number" id="min" className="bg-gray-50 border border-gray-300 text-gray-900 text-[12px] rounded-[5px] focus:ring-blue-500
                      focus:border-blue-500 block w-full p-1 h-[100%] " placeholder="&#8377; Min" required />
                     </div>
                     <div className="w-[60px] h-[35px]">
                     <input type="number" id="min" className="bg-gray-50 border border-gray-300 text-gray-900 text-[12px] rounded-[5px] focus:ring-blue-500
                      focus:border-blue-500 block w-full p-1 h-[100%] " placeholder="&#8377; Max" required />
                     </div>
                     <div className="w-[40px] h-[35px]">
                     <button type="button" id="min" className="bg-gray-50 border border-gray-300 text-gray-900 text-[12px] rounded-[5px] focus:ring-blue-500
                      focus:border-blue-500 block w-full p-1 h-[100%] " >Go</button>
                     </div>
              </div>
               
            </div>
        </div>
        <div 
          className="laptop:w-[calc(100%_-_250px)] laptop:h-[100%] overflow-y-scroll no-scrollbar
                      mobile:w-[100%] mobile:h-[100%] ">
           
                {
                   products?.map((product,index)=>{
                    return (
                      <div  key={index}
                        className="laptop:w-[100%] laptop:h-[250px] laptop:grid laptop:grid-cols-[400px_calc((100%_-_400px))] border-b-[1px] border-gray-300
                                   mobile:w-[100%] mobile:h-[150px] mobile:grid-cols-[120px_calc((100%_-_120px))]">
                        {/* Image Widget */}
                        <div className="laptop:w-[100%] laptop:h-[100%] laptop:flex laptop:justify-center laptop:items-center
                                        mobile:w-[100%] mobile:h-[150px] mobile:flex mobile:justify-center mobile:items-center ">
                              <div
                                className="laptop:w-[calc(100%_-_150px)] laptop:h-[calc(100%_-_100px)] relative
                                           mobile:w-[150px] mobile:h-[125px] ">
                                <Link
                                    href={`/product/${product?._id}`}>
                                      <Image
                                          className="mobile:py-[25px] px-[15px]"
                                          src={
                                            product && product?.images && product?.images.length > 0
                                              ? product?.images[0].url
                                              : "/images/default_product.png"
                                          }
                                          alt="Product"
                                          fill={true}
                                        />
                                </Link>
                              </div>
                        </div>
                        {/* Information */}
                        <div
                          className="laptop:w-[100%] laptop:h-[100%] 
                                     mobile:w-[100%] mobile:h-[100%]">
                            <div
                              className="laptop:w-[100%] laptop:h-[30px] overflow-hidden
                                         mobile:w-[100%] mobile:h-[20px] mobile:flex mobile:items-center ">
                                <span className="font-Mont font-[500] ml-[2px] text-[#2c2b2b]  laptop:text-[18px] 
                                                 mobile:text-[15px]">
                                       {product?.name}
                                </span>
                            </div>
                            <div
                              className="laptop:w-[100%] laptop:h-[25px] flex items-center 
                                         mobile:w-[100%] mobile:h-[20px]">
                                <div className="laptop:w-[35px] laptop:h-[18px] bg-[#388E3C] rounded-[2px] ml-[2px] flex justify-center items-center
                                                mobile:w-[25px] mobile:h-[15px]">
                                  <span className="text-white text-[12px] font-semibold 
                                                    mobile:text-[8px]">
                                       {product?.ratings} &#9733;
                                  </span> 
                                </div>
                            </div>
                            <div
                              className="laptop:w-[100%] laptop:h-[25px] 
                                         mobile:w-[100%] mobile:h-[15px] mobile:flex mobile:items-center">
                              <span className=" font-Mont ml-[2px] font-[600] text-[18px] text-[#2c2b2b]">&#8377; {product?.price}</span> 
                            </div>
                            <div
                              className="laptop:w-[100%] laptop:h-[170px] laptop:p-[2px] overflow-hidden 
                                         mobile:w-[100%] mobile:h-[95px]">
                                <span className="ml-[2px] laptop:font-Mont laptop:leading-[8px]  text-[#2c2b2b]
                                                  mobile:text-[12px] mobile:font-Mont mobile:leading-[2px]">
                                      {product?.description}
                                </span>
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


// <div className="laptop:w-[100%] laptop:h-[calc(100vh_-_60px)] laptop:p-[10px] laptop:flex laptop:border-3 laptop:border-gray-800
//                    mobile:w-[100%] mobile:h-[calc(100vh_-_60px)] mobile:p-[2px] ">
//         <div className="laptop:w-[250px] laptop:h-[100%] laptop:border-3 laptop:border-red-800
//                         mobile:hidden"></div>
//         {
//         !products ? 
//         <div className="laptop:w-[calc(100%_-_250px)] laptop:h-[100%] laptop:flex laptop:justify-center laptop:items-center
//                        "> <Loading/> </div> :
//         <div className="laptop:w-[calc(100%_-_250px)] laptop:h-[100%] laptop:overflow-y-scroll laptop:p-1 
//                         mobile:w-[100%] mobile:h-[100%] mobile:overflow-y-scroll mobile:p-1 ">
//             {
//                 products?.map((product,index)=>{
//                    return (
//                    <div className="laptop:w-[100%] laptop:h-[250px] laptop:grid laptop:grid-cols-[400px_calc((100%_-_400px))] laptop:mt-2
//                                           mobile:w-[100%] mobile:h-[250px] border border-green-700 mobile:grid mobile:grid-cols-[100px_calc((100%_-_100px))] mobile:mt-2 mobile:border-b-[1px] mobile:border-gray-300" key={index}>
//                         <div className="laptop:w-[400px] laptop:h-[250px] laptop:relative
//                                         mobile:w-[100px] mobile:h-[250px] mobile:flex mobile:items-center ">
//                             <div className="mobile:w-[100%] mobile:h-[155px] mobile:relative 
//                                             ">
//                                 <Link
//                                 href={`/product/${product?._id}`}>
//                                   <Image
//                                       className="mobile:py-5 px-2"
//                                       src={
//                                         product && product?.images && product?.images.length > 0
//                                           ? product?.images[0].url
//                                           : "/images/default_product.png"
//                                       }
//                                       alt="product anme"
//                                       fill={true}
//                                     />
//                                   </Link>
//                             </div>
//                         </div>
//                         <div className="ml-2
//                                         mobile:h-[250px] mobile:w-[100%-100px] mobile:ml-[2px]">
//                             <div className="mobile:h-[25px] mobile:w-[100%]  mobile:text-ellipsis mobile:overflow-clip">
//                               <Link
//                                 href={`/product/${product?._id}`}
//                               >
//                                     <p className="text-lg font-bold hover:text-blue-600 text-[#020617]  mobile:text-ellipsis mobile:overflow-clip">{product?.name}</p>
//                               </Link>
//                             </div>
//                             <div className="text-[#020617]
//                                             mobile:h-[25px] mobile:text-[#020617] ">Rating  <span >{product?.ratings} &#9733; </span></div>
//                             <div className="text-xl font-bold text-[#020617]
//                                             mobile:h-[25px] mobile:text-[#020617]">&#x20b9; {product?.price}</div>
//                             <div className="italic  text-[#020617]
//                                             mobile:h-[125px] mobile:text-[#020617] border border-red-800  mobile:overflow-hidden"><span className="w-[100%] h-[100%] overflow-hidden">{product?.description}</span></div>
//                         </div>
//                    </div>)
//                 })
//             }
            
//         </div>
//         }
//     </div>


