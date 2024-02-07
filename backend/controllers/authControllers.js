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




