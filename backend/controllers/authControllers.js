import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import expressJwt from "express-jwt";
import errorHandler from "../errorHandler/dbErrorHandler.js";
import dotenv from "dotenv";
dotenv.config();

const signup = async (req, res) => {
  try {
    const newUser = await new User(req.body);
    console.log("client send=>", req.body);

    await newUser.save((err, newUser) => {
      if (err) {
        //return res.status(400).json({ err });
        return res.status(400).json({
          error: "Invalid form input",
          // error: errorHandler(err),
        });
      }
      res.status(200).json({ newUser });
    });
  } catch (err) {
    console.error(err.message);
  }
};

const signin = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User with that email does not exist. Please signup.",
      });
    }

    if (!user.authenticate(password)) {
      return res.status(401).json({
        error: "email and password dont match",
      });
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

    res.cookie("t", token, { expire: new Date() + 9999 });

    const { _id, name, email, role } = user;
    return res.json({ token, user: { _id, email, name, role } });
  });
};

const signout = (req, res) => {
  res.clearCookie("t");
  res.json({ message: "Signout success" });
};

//restricted routes authorizaton
const requireSignin = expressJwt({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
  userProperty: "auth",
});

const isAuth = (req, res, next) => {
  let user = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!user) {
    return res.status(403).json({
      error: "Access denied!Not Authenticated",
    });
  }
  next();
};

const isAdmin = (req, res, next) => {
  if (req.profile.role === 0) {
    return res.status(403).json({
      error: "Admin resourse! Access denied",
    });
  }
  next();
};

export { signup, signin, signout, requireSignin, isAuth, isAdmin };
