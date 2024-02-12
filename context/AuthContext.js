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

  const getAddress = async () =>{

    const { data } = await axios.get(`${process.env.API_URL}/api/address`);

    setAddress(data);
    
    return;
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        registerUser,
        getAddress
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;