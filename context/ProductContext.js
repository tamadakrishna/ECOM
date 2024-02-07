"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [updated, setUpdated] = useState(false);

  const router = useRouter();

  const getProduct = async (id)=>{
    try{
      const { data } = await axios.get(`${process.env.API_URL}/apiproducts/${id}`);
      return data;
    }
    catch(error){
      setError(error?.response?.data?.message);
    }
  }

  const newProduct = async (product) => {
    try {
      const { data } = await axios.post(
        `${process.env.API_URL}/api/admin/products`,
        product
      );

      if (data) {
        router.replace("/admin/products");
      }
    } catch (error) {
      setError(error?.response?.data?.message);
    }
  };

  const deleteProduct = async (id)=>{
    try{
      const {data} = await axios.delete(`${process.env.API_URL}/api/admin/products/${id}`);
      router.replace(`/admin/products`);
    }
    catch(error){
      setError(error?.response?.data?.message);
    }
    return;
  }

  const updateProduct = async (id,info) =>{
    try{
      const {data} = await axios.put(`${process.env.API_URL}/api/admin/products/${id}`,info)
      if(data)
      {
        router.replace(`/admin/products`);
      }
    }
    catch(error){
      setError(error?.response?.data?.message)
    }
    return;
  }

  const uploadImage = async (file,id)=>{
    // console.log("UPLOAD IMAGE")
    const data = await axios.post(`${process.env.API_URL}/api/admin/products/upload_images/${id}`,file);
    return;
  }

  const clearErrors = () => {
    setError(null);
  };

  return (
    <ProductContext.Provider
      value={{
        error,
        loading,
        updated,
        setUpdated,
        newProduct,
        getProduct,
        deleteProduct,
        updateProduct,
        uploadImage,
        clearErrors,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;