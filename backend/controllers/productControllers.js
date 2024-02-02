import Product from "@/backend/models/product";
import APIFilters from "../utils/APIFilters";
import ErrorHandler from "../utils/errorHandler";
import dbConnect from "@/backend/config/dbConnect";

export const newProduct = async (req, res, next) => {

  const product = await Product.create(req);

  return product;
};

export const getProducts = async (req, res, next) => {
    dbConnect();
  const resPerPage = 2;
  const productsCount = await Product.countDocuments();

  const apiFilters = new APIFilters(Product.find(), req)
    .search()
    .filter();

  let products = await apiFilters.query;
  const filteredProductsCount = products.length;

  apiFilters.pagination(resPerPage);

  products = await apiFilters.query.clone();

  return {
    productsCount,
    resPerPage,
    filteredProductsCount,
    products,
  };
};

export const getProduct = async (req, res, next) => {
    dbConnect();
  const product = await Product.findById(req);
  

  if (!product) {
    return next(new ErrorHandler("Product not found.", 404));
  }
  return product;

  
};



