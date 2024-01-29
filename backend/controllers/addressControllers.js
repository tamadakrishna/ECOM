import Address from "../models/address";

export const newAddress = async (req, res) => {
  req.body.user = req.user._id;

  const address = await Address.create(req.body);

  res.status(200).json({
    address,
  });
};

export const getAddresses = async (req, res) => {
    console.log(req)
  const addresses = await Address.find();

 return addresses;
};

export const updateAddress = async (req, res) => {
  let address = await Address.findById(req.query.id);

  if (!address) {
    return next(new ErrorHandler("Address not found", 404));
  }

  address = await Address.findByIdAndUpdate(req.query.id, req.body);

  res.status(200).json({
    address,
  });
};

export const deleteAddress = async (req, res) => {
  let address = await Address.findById(req.query.id);

  if (!address) {
    return next(new ErrorHandler("Address not found", 404));
  }

  await address.remove();

  res.status(200).json({
    success: true,
  });
};