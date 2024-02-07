"use client";

import React, { useState, useContext } from 'react';
import ProductContext from '@/context/ProductContext';

const UploadImages = ({productId})=> {
  const [selectedFile, setSelectedFile] = useState(null);

  const {uploadImage} = useContext(ProductContext);

  const handleFileUpload = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    try{
      if(!selectedFile){
        return
      }
      const formData = new FormData();
      formData.append("image",selectedFile);
      uploadImage(formData,productId);

    }
    catch(error){
      console.log("Error");
    }
  };

  return (
    <div>
      <form>
        <label className="sr-only">Choose file</label>
        <input onChange={handleFileUpload} type="file" className="block w-full border 
        border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 
        disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1
        dark:focus:ring-gray-600
          file:bg-gray-50 file:border-0
          file:me-4
          file:py-3 file:px-4
          dark:file:bg-gray-700 dark:file:text-gray-400"/>
        </form>
        <div className="flex justify-center">
        <button onClick={handleUpload} type="button" className="py-3 px-4 mt-2 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-500 text-white hover:bg-gray-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
          Upload
        </button>
        </div>
    </div>
  )
}

export default UploadImages