import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
  orderId: {
    type: String,
    required: true
  },
  orderDate: {
    type: Date,
    default: Date.now,
  },
  userId: {
    type: String,
    required: true
  },
  orderDetails:[
    {
      productName: {
        type: String,
        required: true
      },
      quantity: {
        type: String,
        required: true
      },
      price: {
        type: String,
        required: true
      },
      total: {
        type: String,
        required: true
      },
    },
  ],
  summary:{
    subTotal: {
      type: String,
      required: true
    },
    tax: {
      type: String,
      required: true
    },
    shippingCharge: {
      type: String,
      required: true
    },
    estimatedTotal: {
      type: String,
      required: true
    },
  },
  customerDetails: {
    name: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    mobile: {
      type: String,
      required: true
    },
  },
  orderStatus: {
    type: String,
    default: "Processing",
  },
 
});

export default mongoose.models.Order || mongoose.model("Order", orderSchema);