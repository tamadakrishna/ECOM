"use client";
import React, { useContext, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import OrderContext from '@/context/OrderContext';

function OrderDetails({id}) {

    const {orderDetails, getOrderDetails} = useContext(OrderContext);

    useEffect(()=>{
        getOrderDetails(id);
    },[])
    
    const router = useRouter();

    const originalDate = new Date(orderDetails?.orderDate);
    const orderDate = originalDate.toLocaleDateString();
  return (
    <div className="w-[100%] h-[100%] overflow-scroll ">
        <div className='w-[100%] h-[40px]'>
            <span className="text-[#252424] font-Poppins font-semibold text-[18px]">Order Overview</span>
        </div>
        <div className="w-[100%] h-[calc(100%_-_40px)] p-2 overflow-y-scroll ">

            <div className='w-[100%] h-[35px] flex border-gray-400 border-b-[1.5px]'>
                <div className='w-[120px] h-[35px] '>
                    <span className="text-[#252424] font-Poppins  text-[12px]">Order ID:</span>
                </div>
                <div className='w-[calc(100%_-_120px)] h-[35px]'>
                    <span className="text-[#252424] font-Poppins  text-[12px]">{orderDetails?.orderId}</span>
                </div>
            </div>

            <div className='w-[100%] h-[35px] flex border-gray-400 border-b-[1.5px]'>
                <div className='w-[120px] h-[35px] '>
                    <span className="text-[#252424] font-Poppins  text-[12px]">Order Date:</span>
                </div>
                <div className='w-[calc(100%_-_120px)] h-[35px] '>
                    <span className="text-[#252424] font-Poppins  text-[12px]">{orderDate}</span>
                </div>
            </div>

            <div className='w-[100%] h-[35px] flex border-gray-400 border-b-[1.5px]'>
                <div className='w-[120px] h-[35px] '>
                    <span className="text-[#252424] font-Poppins  text-[12px]">Customer Name:</span>
                </div>
                <div className='w-[calc(100%_-_120px)] h-[35px] '>
                    <span className="text-[#252424] font-Poppins  text-[12px]">{orderDetails?.customerDetails?.name}</span>
                </div>
            </div>

            <div className='w-[100%] h-[45px] flex border-gray-400 border-b-[1.5px]'>
                <div className='w-[120px] h-[35px] '>
                    <span className="text-[#252424] font-Poppins  text-[12px]">Address</span>
                </div>
                <div className='w-[calc(100%_-_120px)] h-[35px] '>
                    <span className="text-[#252424] font-Poppins  text-[12px]">{orderDetails?.customerDetails?.address}</span>
                </div>
            </div>

            <div className='w-[100%] h-[35px] flex border-gray-400 border-b-[1.5px]'>
                <div className='w-[120px] h-[35px] '>
                    <span className="text-[#252424] font-Poppins  text-[12px]">Mobile:</span>
                </div>
                <div className='w-[calc(100%_-_120px)] h-[35px] '>
                    <span className="text-[#252424] font-Poppins  text-[12px]">{orderDetails?.customerDetails?.mobile}</span>
                </div>
            </div>

            <div className='w-[100%] h-[35px] flex border-gray-400 border-b-[1.5px]'>
                <div className='w-[120px] h-[35px] '>
                    <span className="text-[#474545] font-Poppins font-semibold text-[15px]">Product Details</span>
                </div>
            </div>
        
            <div className='w-[100%] h-[35px] flex border-gray-400 border-b-[1.5px]'>
                <div className='w-[120px] h-[35px] '>
                    <span className="text-[#474545] font-Poppins font-medium text-[14px]">Product</span>
                </div>
                <div className='w-[100px] h-[35px] '>
                    <span className="text-[#474545] font-Poppins font-medium text-[14px]">Quantity</span>
                </div>
                <div className='w-[calc(100%_-_220px)] h-[35px]  '>
                    <span className="text-[#474545] font-Poppins font-medium text-[14px]">Price</span>
                </div>
            </div>

            {/* List of Products */}
            {
                orderDetails?.orderDetails?.map((product,index)=>{
                    return(
                        <div key={index} className='w-[100%] h-[35px] flex border-gray-400 border-b-[1.5px]'>
                            <div className='w-[120px] h-[35px] '>
                                <span className="text-[#474545] font-Poppins  text-[12px]">{product?.productName}</span>
                            </div>
                            <div className='w-[100px] h-[35px] '>
                                <span className="text-[#474545] font-Poppins  text-[12px]">{product?.quantity}</span>
                            </div>
                            <div className='w-[calc(100%_-_220px)] h-[35px]  '>
                                <span className="text-[#474545] font-Poppins text-[12px]">&#x20b9;{(product?.quantity * product?.price)}</span>
                            </div>
                        </div>)
                })
            }

                    <div className='w-[100%] h-[35px] flex border-gray-400 border-b-[1.5px]'>
                        <div className='w-[120px] h-[35px] '>
                            <span className="text-[#474545] font-Poppins font-semibold text-[15px]">Summary</span>
                        </div>
                    </div>

                    <div className='w-[100%] h-[35px] flex border-gray-400 border-b-[1.5px]'>
                        <div className='w-[120px] h-[35px] '>
                            <span className="text-[#252424] font-Poppins  text-[12px]">SubTotal</span>
                        </div>
                        <div className='w-[calc(100%_-_120px)] h-[35px] '>
                            <span className="text-[#252424] font-Poppins  text-[12px]">&#x20b9;{orderDetails?.summary?.subTotal}</span>
                        </div>
                    </div>

                    <div className='w-[100%] h-[35px] flex border-gray-400 border-b-[1.5px]'>
                        <div className='w-[120px] h-[35px] '>
                            <span className="text-[#252424] font-Poppins  text-[12px]">Tax</span>
                        </div>
                        <div className='w-[calc(100%_-_120px)] h-[35px] '>
                            <span className="text-[#252424] font-Poppins  text-[12px]">&#x20b9;{orderDetails?.summary?.tax}</span>
                        </div>
                    </div>

                    <div className='w-[100%] h-[35px] flex border-gray-400 border-b-[1.5px]'>
                        <div className='w-[120px] h-[35px] '>
                            <span className="text-[#252424] font-Poppins  text-[12px]">Shipping Charges</span>
                        </div>
                        <div className='w-[calc(100%_-_120px)] h-[35px] '>
                            <span className="text-[#252424] font-Poppins  text-[12px]">&#x20b9;{orderDetails?.summary?.shippingCharge}</span>
                        </div>
                    </div>

                    <div className='w-[100%] h-[35px] flex border-gray-400 border-b-[1.5px]'>
                        <div className='w-[120px] h-[35px] '>
                            <span className="text-[#252424] font-Poppins  text-[12px]">Estimated Total</span>
                        </div>
                        <div className='w-[calc(100%_-_120px)] h-[35px] '>
                            <span className="text-[#252424] font-Poppins  text-[12px]">&#x20b9;{orderDetails?.summary?.estimatedTotal}</span>
                        </div>
                    </div>

                    <div className='w-[100%] h-[35px] flex border-gray-400 border-b-[1.5px]'>
                        <div className='w-[120px] h-[35px] '>
                            <span className="text-[#252424] font-Poppins  text-[12px]">Payment</span>
                        </div>
                        <div className='w-[calc(100%_-_120px)] h-[35px] '>
                            <span className="text-[#252424] font-Poppins  text-[12px]">Done</span>
                        </div>
                    </div>

                    <div className="w-[100%] h-[40px] flex items-center small_screen:justify-center px-[10px]">
                        <div className="w-[100%] laptop:w-[400px] h-[30px] cursor-pointer bg-yellow-400 rounded-[5px] flex justify-center items-center"
                                onClick={(e)=>{ 
                                    router.push('/profile/orders')
                                }}>
                                <span className="text-[#020617] cursor-pointer">Back</span>
                        </div>
                  </div>
            
        </div>
    </div>
  )
}

export default OrderDetails