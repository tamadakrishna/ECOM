import Address from "../models/address";
import dbConnect from "@/backend/config/dbConnect";

export const newAddress = async (req, res) => {
  dbConnect();

  const address = await Address.create(req);

  return address;
};

export const getAddresses = async (userid, res) => {
  dbConnect();
  const addresses = await Address.find({userid:userid});
 return addresses;
};

export const updateAddress = async (id,updatedAddress) => {
  dbConnect();
  const filter = { _id:id };
  const doc = await Address.findOneAndUpdate(filter, updatedAddress, {
    new: true
  })
  if(doc)
  return {message:"success"};

  return {message:"error"}
};

export const deleteAddress = async (id, res) => {
  let address = await Address.findById({_id:id});

  if (!address) {
    return next(new ErrorHandler("Address not found", 404));
  }

  await address.deleteOne();

  return {status:200}

};