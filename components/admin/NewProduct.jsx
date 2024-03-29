"use client";

import ProductContext from "@/context/ProductContext";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const NewProduct = () => {
  const { createProduct } = useContext(ProductContext);

  const router = useRouter();

  const categories = [
    "Electronics",
    "Fashion",
    "Books",
    "Food",
  ];

  const [product, setProduct] = useState({
    name: "",
    description: "",
    seller: "",
    price: "",
    stock: "",
    category: categories[0],
  });


  const submitHandler = (e) => {
    e.preventDefault();
    toast.success("successfully created!")
    setProduct({
      name: "",
      description: "",
      seller: "",
      price: "",
      stock: "",
      category: "",
    })
    createProduct(product);
    router.push('/admin/products')
  };

  return (
    <section className="container h-[100%] overflow-y-scroll max-w-3xl p-6 mx-auto no-scrollbar">
        <span className=" text-[#39407a] text-[20px]  mb-2 font-Poppins font-semibold">Create New Product</span>

      <form onSubmit={submitHandler}>
        <div className="mb-4">
          <label className="block mb-1 text-[#1e1d1d]"> Name </label>
          <input
            type="text"
            className="relative m-0 placeholder:text-[#3a3939] w-full block flex-auto rounded border border-solid border-neutral-300  bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6]  outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
            placeholder="Product name"
            name="name"
            value={product?.name}
            onChange={(e)=>{setProduct({...product, name:e.target.value})}}
            required
          />
        </div>

        <div className="mb-4 mt-5">
          <label className="block mb-1 text-[#1e1d1d]"> Description </label>
          <textarea
            rows="4"
            className="relative m-0 placeholder:text-[#3a3939] w-full block flex-auto rounded border border-solid border-neutral-300  bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6]  outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
            placeholder="Product description"
            name="description"
            value={product?.description}
            onChange={(e)=>{setProduct({...product, description:e.target.value})}}
            required
          ></textarea>
        </div>

        <div className="grid md:grid-cols-2 gap-x-2 mt-5">
          <div className="mb-4">
            <label className="block mb-1 text-[#1e1d1d]"> Price </label>
            <div className="relative">
              <div className="col-span-2">
                <input
                  type="text"
                  className="relative m-0 placeholder:text-[#3a3939] w-full block flex-auto rounded border border-solid border-neutral-300  bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6]  outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
                  placeholder="0.00"
                  name="price"
                  value={product?.price}
                   onChange={(e)=>{setProduct({...product, price:e.target.value})}}
                  required
                />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-[#1e1d1d]"> Category </label>
            <div className="relative">
              <select
                className="relative m-0 placeholder:text-[#3a3939] w-full block flex-auto rounded border border-solid border-neutral-300  bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6]  outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
                name="category"
                value={product?.category}
                onChange={(e)=>{setProduct({...product, category:e.target.value})}}
                required
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-x-2 mt-5">
          <div className="mb-4">
            <label className="block mb-1 text-[#1e1d1d]"> Seller </label>
            <input
              type="text"
              className="relative m-0 placeholder:text-[#3a3939] w-full block flex-auto rounded border border-solid border-neutral-300  bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6]  outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
              placeholder="Seller"
              name="seller"
              value={product?.seller}
              onChange={(e)=>{setProduct({...product, seller:e.target.value})}}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-[#1e1d1d]"> Stock </label>
            <div className="relative">
              <div className="col-span-2">
                <input
                  type="text"
                  className="relative m-0 placeholder:text-[#3a3939] w-full block flex-auto rounded border border-solid border-neutral-300  bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6]  outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
                  placeholder="0"
                  name="stock"
                  value={product?.stock}
                  onChange={(e)=>{setProduct({...product, stock:e.target.value})}}
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Create Product
        </button>
      </form>
    </section>
  );
};

export default NewProduct;