import User from "../models/user";
import dbConnect from "@/backend/config/dbConnect";
import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {
  const { name, email, password } = req;

  const encryptpassword = await bcrypt.hash(password, 10);
  dbConnect();

    const user = await User.create({
      name,
      email,
      password:encryptpassword
    });
    
    return user;
 
};

export const getUsers = async (req, res) => {

  const users = await User.find({});

  return users;
};


export const deleteUser = async (req, res) => {

  let user = await User.findById(req);

  if (!user) {
    return next(new ErrorHandler("No User found with this ID", 404));
  }

  await user.deleteOne();

  return "SUCCESS";
};

export const verifyUser = async (email,password) =>{

  dbConnect();

  let user = await User.findOne({email:email});

  if(user){
    const status = await bcrypt.compare(password, user.password);
    if(status)
    return user;
  
    return null;
  }
 
}

export const getUser = async(email) => {
  let user = await User.findOne({email:email})
  if(!user)
  return null;

  return user;
}