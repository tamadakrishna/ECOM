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
  dbConnect();

  const users = await User.find({});

  return users;
};

export const deleteUser = async (req, res) => {
  dbConnect();

  let user = await User.findById(req);

  if (!user) {
    return null;
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
  dbConnect();

  let user = await User.findOne({email:email})
  if(!user)
  return null;

  return user;
}

export const updateProfile = async(id,info) => {
  dbConnect();
  const filter = { _id:id };
  const doc = await User.findOneAndUpdate(filter, info, {
    new: true
  })

  return;
}

export const updatePassword = async (id,oldpass,newpass) =>{

  dbConnect();

  let user = await User.findOne({_id:id});

  if(user){
    const status = await bcrypt.compare(oldpass, user.password);
    if(status){
          const encryptpassword = await bcrypt.hash(newpass, 10);
          const filter = { _id:id };
          const doc = await User.findOneAndUpdate(filter, {
            password:encryptpassword
          }, {
            new: true
          })
    }
    return user;
  
  }
 
}