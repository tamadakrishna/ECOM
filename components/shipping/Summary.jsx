"use client";
import React, {useContext} from 'react'
import CartContext from "@/context/CartContext";
import AuthContext from '@/context/AuthContext';
import OrderContext from '@/context/OrderContext';
import { useRouter } from 'next/navigation';

const Summary = ({address,mobile,name})=> {
  const { cart, summary, setCart, setSummary} = useContext(CartContext);
  const {user} = useContext(AuthContext)
  const {placeOrder} = useContext(OrderContext)


  const router = useRouter();

  const handleSubmit = () => {
    //Order Details
    const Order_Details = cart?.map((info)=>{
        return {
            "productName":info.name,
            "quantity":info.quantity,
            "price":info.price,
            "total":(info.price * info.quantity)
        }
    });

    // Summary Details
    const SummaryDetails = {
            "subTotal":summary.subTotal,
            "tax":summary.salesTax,
            "shippingCharge":summary.shipping,
            "estimatedTotal":summary.estimatedTotal
        }

    //customerDetails
    const customerDetails = {
        "name":name,
        "address":address,
        "mobile":mobile
    }

    const order = {
        "orderId":Date.now(),
        "userId":user.id,
        "orderDetails":Order_Details,
        "summary":SummaryDetails,
        "customerDetails":customerDetails
    }
    placeOrder(order);
    setCart([]);
    setSummary({
        subTotal:0,
        shipping:40,
        estimatedTotal:0,
        salesTax:0
      })
    router.push('/');
    return;
  }

  return (
    <div className={`mobile:w-[100vw] mobile:h-[calc(100vh_-_60px)] mobile:bg-gray-100 mobile:p-[5px]`}>
      <div className="mobile:w-[100%] mobile:h-[25px] mobile:flex mobile:items-center mobile:justify-end "
      onClick={(e)=>{  router.back() }}><span className="text-[#020617] text-[15px] font-semibold cursor-pointer mr-[10px]">Cancel</span></div>
      <div className="mobile:w-[100%] mobile:h-[calc(100%_-_25px)]  mobile:px-[10px] mobile:flex mobile:justify-center mobile:items-center ">
        <div className="mobile:w-[350px] mobile:h-[450px] mobile:px-[8px] bg-white mobile:border-[1.2px] rounded-[2px] mobile:border-gray-400">
          <div className="mobile:w-[100%] mobile:h-[400px]">
              <div className="mobile:w-[100%] mobile:h-[50px] mobile:border-b-[1.2px] mobile:border-gray-400 mobile:flex mobile:items-center">
                <span className="text-[#020617] text-[20px] font-semibold font-Poppins uppercase">ORDER SUMMARY</span>
              </div>
              <div className="mobile:w-[100%] mobile:max-h-[120px] mobile:border-b-[1.2px] mobile:border-gray-400 overflow-y-scroll">
                {
                  cart?.map((product,index)=>{
                    return(
                      <div key={index} className="mobile:w-[100%] mobile:h-[25px]   mobile:flex mobile:items-center mobile:justify-between">
                        <span className="text-[#3f3f41] text-[15px]  font-Poppins ">{product?.quantity} x {product?.name}</span>
                        <span className="text-[#3f3f41] text-[15px]  font-Poppins ">&#x20b9;{product?.quantity * product?.price}</span>
                      </div>
                    );
                  })
                }
                
              </div>
              <div className="mobile:w-[100%] mobile:h-[50px]  mobile:border-b-[1.2px] mobile:border-gray-400 mobile:flex mobile:items-center mobile:justify-between">
                <span className="text-[#3f3f41] text-[15px]  font-Poppins font-semibold">Subtotal</span>
                <span className="text-[#3f3f41] text-[15px]  font-Poppins ">&#x20b9;{summary.subTotal}</span>
              </div>
              <div className="mobile:w-[100%] mobile:h-[50px]  mobile:border-b-[1.2px] mobile:border-gray-400 mobile:flex mobile:items-center mobile:justify-between">
                <span className="text-[#3f3f41] text-[15px]  font-Poppins ">Estimated Tax</span>
                <span className="text-[#3f3f41] text-[15px]  font-Poppins ">&#x20b9;{summary.salesTax}</span>
              </div>
              <div className="mobile:w-[100%] mobile:h-[50px]  mobile:border-b-[1.2px] mobile:border-gray-400 mobile:flex mobile:items-center mobile:justify-between">
                <span className="text-[#3f3f41] text-[15px]  font-Poppins ">Shipping</span>
                <span className="text-[#3f3f41] text-[15px]  font-Poppins ">&#x20b9;{summary.shipping}</span>
              </div>
              <div className="mobile:w-[100%] mobile:h-[50px]  mobile:border-b-[1.2px] mobile:border-gray-400 mobile:flex mobile:items-center mobile:justify-between">
                <span className="text-[#3f3f41] text-[15px]  font-Poppins ">Estimated Total</span>
                <span className="text-[#3f3f41] text-[15px]  font-Poppins ">&#x20b9;{summary.estimatedTotal}</span>
              </div>
          </div>
          <div className="mobile:w-[100%] mobile:h-[50px]">
            <div className="mobile:w-[100%] mobile:h-[40px] cursor-pointer bg-yellow-400 rounded-[5px] mobile:flex mobile:justify-center mobile:items-center"
                onClick={(e)=>{ 
                handleSubmit()
                  }}>
                <span className="text-[#020617] cursor-pointer">Proceed to Pay</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Summary