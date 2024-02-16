import Order from "@/backend/models/order";
import dbConnect from "@/backend/config/dbConnect";

export const createOrder = async (orderData) => {
  dbConnect();
  const order = await Order.create(orderData);
  return order
}

export const fetchUserOrders = async (id) =>{
  dbConnect();
  const userOrders = await Order.find({userId:id});
  return userOrders;
}

export const fetchOrder = async (id) =>{
  dbConnect();
  const userOrder = await Order.findOne({_id:id});
  return userOrder;
}
 
export const fetchAllOrders = async () =>{
  dbConnect();
  const Orders = await Order.find({});
  return Orders;
}