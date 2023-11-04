import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";
const JWT_SECRET = "AMIN@#AKHTER";
//protected Routes token base
export const requireSignIn = async (req, res, next) => {
  try {
    const decode = JWT.verify(req.headers.authorization, JWT_SECRET);
    //dcrypt
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
  }
};
//admin access you can use these middle ware in route
export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !== 1) {
      return res.status(401).send({
        success: false,
        message: "UnAuthorized Access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
  }
};
