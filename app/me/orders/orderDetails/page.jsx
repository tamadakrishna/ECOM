import React from 'react'
import OrderDeatils from '@/components/orders/OrderDetails'

const OrderDetailsPage = ({searchParams})=> {
  return (
    <>
        <OrderDeatils id={searchParams.id}/>
    </>
  )
}

export default OrderDetailsPage