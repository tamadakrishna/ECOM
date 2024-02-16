import React from 'react';
import OrderDetails from '@/components/admin/OrderDetails'

function OrderDetailsPage({searchParams}) {
  return (
    <OrderDetails id={searchParams.id}/>
  )
}

export default OrderDetailsPage