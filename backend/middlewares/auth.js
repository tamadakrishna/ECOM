import { getSession } from "next-auth/react";
import ErrorHandler from "../utils/errorHandler";

const isAuthenticatedUser = async (req, res) => {
  const session = await getSession({ req });

  if (!session) {
    console.log("NO SESSION")
    // return next(new ErrorHandler("Login first to access this route", 401));
  }

  req.user = session?.user;

};

const authorizeRoles = (...roles) => {
  console.log("roles", roles)
  return (req, res, next) => {
    return next();
    if (!roles.includes(req?.user?.role)) {
      return next(
        new ErrorHandler(
          `Role (${req?.user?.role}) is not allowed to access this resource.`
        )
      );
    }

    next();
  };
};

export { isAuthenticatedUser, authorizeRoles };