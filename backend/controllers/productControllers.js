import Product from "@/backend/models/product";
import dbConnect from "@/backend/config/dbConnect";
import axios from "axios";
import {cloudinary} from "../utils/cloudinary";
import {Store, FlushFiles} from "../utils/storage";

export const newProduct = async (req, res,) => {
  dbConnect();

  const product = await Product.create(req);

  return product;
};

export const getProducts = async (page=1, res ) => {
    dbConnect();
    const count = await Product.countDocuments();
    const skip = (page - 1) * 4;
    const Products = await Product.find({}).skip(skip).limit(4);
    return {
      products:Products,
      count:count
    };
};

export const getProduct = async (req, res) => {
    dbConnect();
  const product = await Product.findById(req);
  
  return product;
  
};

export const Upload_Image = async (file,id) => {
  dbConnect();
  
  const Files = await Store(file);
  let urls = [];

  for(let i=0;i<Files?.length;i++){
    const result = await cloudinary.v2.uploader.upload(Files[i],{folder:"ECOM/Products"});
    if(result)
    {
      urls.push( {
        public_id: result.public_id,
        url: result.url,
      });
    }
  }
  

  const filter = {_id:id}
  const product = await Product.findByIdAndUpdate(filter, {
    images: urls,
  });
 
  if(product)
  FlushFiles();
  

return;

}

export const deleteProduct = async(req,res) => {
  dbConnect();
  let product = await Product.findById(req);

  await product.deleteOne();

  return {status:200}
}

export const updateProduct= async(id,info) => {
  dbConnect();
  const filter = { _id:id };
  // const update = { age: 59 };
  const doc = await Product.findOneAndUpdate(filter, info, {
    new: true
  })
  if(doc)
  return {message:"success"};

  return {message:"error"}
}

export const searchProduct = async(searchWord) =>{
  dbConnect();
  const keywords = searchWord.split(' ');
  const regex = new RegExp(keywords.join('|'), 'i');
  const products = await Product.find({name:regex});
    if(products){
        return {
          products:products,
          count:products.length
        };
    }
  
  return null;
}

export const filterProduct = async(type,data)=>{
  dbConnect();
  
  if(type==="categories"){
    const products = await Product.find({ category: { $in: data } });
    if(products){
      
        return {
          products:products,
          count:products.length
        }
    }

    return null;
  }else if(type==="price"){
    const products = await Product.find({ price: { $gt: data.min, $lt: data.max } });
    if(products){
      
      return {
        products:products,
        count:products.length
      }
  }

    return null;
  }
 return;
}