"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [address,setAddress] = useState([]);

  const router = useRouter();

  const registerUser = async ({ name, email, password }) => {

      const { data } = await axios.post(
        `${process.env.API_URL}/api/auth/register`,
        {
          name,
          email,
          password,
        }
      );
      
      if (data?.user) {
        router.push("/");
      }
   
  };

  const getAddress = async (userid) =>{
    if(userid){
      const { data } = await axios.get(`${process.env.API_URL}/api/address`,
      {
        params:{
          userid:userid
        }
      });

      setAddress(data);
    }
  
    
    return;
  }

  const newAddress = async (address) =>{
    try{
    const { data } = await axios.post(`${process.env.API_URL}/api/address`,address);
    console.log("new address response",data)
    }
    catch(error){
      console.log(error);
    }
  }

  const deleteAddress = async(id) =>{
    try{
      const { data } = await axios.delete(`${process.env.API_URL}/api/address`,
      {
        data:{
            "id":id
        }
      });
      }
      catch(error){
        console.log(error);
      }
  }

  const updateAddress = async(id, address) => {

    try{
    const {data} = await axios.put(`${process.env.API_URL}/api/address/${id}`,address)
    }
    catch(error){
      console.log(error);
    }

    return;
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        address,
        setUser,
        registerUser,
        getAddress,
        newAddress,
        deleteAddress,
        updateAddress
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;