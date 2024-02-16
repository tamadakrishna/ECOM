"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, useState } from "react";
import { signOut } from "next-auth/react";
import toast from 'react-hot-toast';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [users, setUsers] = useState(null);
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
    router.back()
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

  const updateProfile = async(profile) =>{

    const info = { name:profile.name,email:profile.email};

    try{
      const {data} = await axios.put(`${process.env.API_URL}/api/auth/user/updateProfile/${profile.id}`,info);
      signOut();
      router.push('/login');
      toast.success('successfully updated')
      }
      catch(error){
        console.log(error);
      }
  }

  const updatePassword = async(info) =>{


    try{
      const {data} = await axios.post(`${process.env.API_URL}/api/auth/user/updatePassword/${info.id}`,
                            {
                              oldPassword:info.password,
                              newPassword:info.newPassword
                            });
      signOut();
      router.push('/login');
      toast.success('successfully updated')
      }
      catch(error){
        console.log(error);
      }
  }

  const getUsers = async()=>{
    try{
      const { data } = await axios.get(`${process.env.API_URL}/api/admin/users`);
      setUsers(data);
      }
      catch(error){
        console.log(error);
      }
  }

  const deleteUser = async(id)=>{
    try{
      const { data } = await axios.delete(`${process.env.API_URL}/api/admin/users/${id}`);
      getUsers();
      }
      catch(error){
        console.log(error);
      }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        users,
        address,
        setUser,
        getUsers,
        deleteUser,
        registerUser,
        getAddress,
        newAddress,
        deleteAddress,
        updateAddress,
        updateProfile,
        updatePassword
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;