import User from "../models/user";

export const registerUser = async (req, res) => {
  const { name, email, password } = req;

  const user = await User.create({
    name,
    email,
    password,
  });
  
  return user;
};





