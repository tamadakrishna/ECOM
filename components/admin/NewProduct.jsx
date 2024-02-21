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

  const { name, description, seller, price, stock, category } = product;

  const onChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };



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
      <h1 className=" text-xl md:text-3xl font-semibold text-black mb-8">
        Create New Product
      </h1>

      <form onSubmit={submitHandler}>
        <div className="mb-4">
          <label className="block mb-1 text-[#1e1d1d]"> Name </label>
          <input
            type="text"
            className="relative m-0 placeholder:text-[#3a3939] w-full block flex-auto rounded border border-solid border-neutral-300  bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6]  outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
            placeholder="Product name"
            name="name"
            value={name}
            onChange={onChange}
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
            value={description}
            onChange={onChange}
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
                  value={price}
                  onChange={onChange}
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
                value={category}
                onChange={onChange}
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
            <label className="block mb-1 text-[#1e1d1d]"> Seller / Brand </label>
            <input
              type="text"
              className="relative m-0 placeholder:text-[#3a3939] w-full block flex-auto rounded border border-solid border-neutral-300  bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6]  outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
              placeholder="Seller or brand"
              name="seller"
              value={seller}
              onChange={onChange}
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
                  value={stock}
                  onChange={onChange}
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