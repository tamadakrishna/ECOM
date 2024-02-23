"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, useState } from "react";
import toast from "react-hot-toast";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState({
    data:[],
    count:0
  });
  const [productDetails, setProductDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const router = useRouter();

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

const getProducts = async (page=1)=>{
  setLoading(true)
  try{
    const { data } = await axios.get(`${process.env.API_URL}/api/products/`, {
      params:{
        page:page,
      }
    });
    setProducts({
      data:data.products,
      count:data.count
    });
  }
  catch(error){
    setError(error.response)
  }
  setLoading(false)
  return;
}

const createProduct = async (product) => {
  const { data } = await axios.post(
    `${process.env.API_URL}/api/admin/products/`,
    product
  );

  if (data) {
    getProducts();
    router.replace("/admin/products");
  }

};

  const deleteProduct = async (id)=>{

      const {data} = await axios.delete(`${process.env.API_URL}/api/admin/products/${id}`);
      getProducts();
      router.replace(`/admin/products`);
    
    return;
  }

  const updateProduct = async (id,info) =>{

      const {data} = await axios.put(`${process.env.API_URL}/api/admin/products/${id}`,info)
      if(data)
      {
        getProducts();
        router.replace(`/admin/products`);
      }
  
    return;
  }

  const uploadImage = async (file,id)=>{
    try{
      const data = await axios.post(`${process.env.API_URL}/api/admin/products/upload_images/${id}`,file);
      router.push('/admin/products')
    }catch(error){
      console.log(error)
    }
    return;
  }

  const filterProducts = async (type,filter)=>{

    try{
        if(type==="categories"){
          const { data, statusText } = await axios.get(`${process.env.API_URL}/api/products/filter/`,
          {
            params:{
              type:type,
              categories:JSON.stringify(filter)
            }
          });

          if(statusText=="success"){
            setProducts({
              data:data.products,
              count:data.count
            })
          }
        }
        if(type==="price"){
          const { data, statusText } = await axios.get(`${process.env.API_URL}/api/products/filter/`,
          {
            params:{
              type:type,
              min:filter.min,
              max:filter.max
            }
          });

          if(statusText=="success"){
            setProducts({
              data:data.products,
              count:data.count
            })
          }
        }
    }catch(error){
      console.log(error)
    }
      return;
  }

  const searchProduct = async (searchTerm)=>{
    try{
      const { data, statusText } = await axios.get(`${process.env.API_URL}/api/products/search/`,
      {
        params:{
          name:searchTerm
        }
      }); 
    if(statusText=="success")
        setProducts({
          data:data.products,
          count:data.count
        })
    }
    catch(error){
      console.log("error",error)
    }

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
        searchProduct,
        filterProducts,
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