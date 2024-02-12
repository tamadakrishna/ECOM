"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productDetails, setProductDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const router = useRouter();

  const createProduct = async (product) => {
      const { data } = await axios.post(
        `${process.env.API_URL}/api/admin/products`,
        product
      );

      if (data) {
        router.replace("/admin/products");
      }
   
  };

  const getProduct = async (id)=>{
    setLoading(true)
    try{
    const { data } = await axios.get(`${process.env.API_URL}/api/products/${id}`);
    setProductDetails(data);
    }
    catch(error){
      setError(error.response);
    }
    setLoading(false)
    return;
}

  const deleteProduct = async (id)=>{

      const {data} = await axios.delete(`${process.env.API_URL}/api/admin/products/${id}`);
      router.replace(`/admin/products`);
    
    return;
  }

  const updateProduct = async (id,info) =>{

      const {data} = await axios.put(`${process.env.API_URL}/api/admin/products/${id}`,info)
      if(data)
      {
        router.replace(`/admin/products`);
      }
  
    return;
  }

  const uploadImage = async (file,id)=>{
    const data = await axios.post(`${process.env.API_URL}/api/admin/products/upload_images/${id}`,file);
    return;
  }

  const getProducts = async ()=>{
    setLoading(true)
    try{
      const { data } = await axios.get(`${process.env.API_URL}/api/products/`);
      setProducts(data);
    }
    catch(error){
      setError(error.response)
    }
    setLoading(false)
    return;
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        productDetails,
        loading,
        error,
        createProduct,
        getProduct,
        getProducts,
        deleteProduct,
        updateProduct,
        uploadImage,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;