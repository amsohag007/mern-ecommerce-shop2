import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import expressJwt from "express-jwt";
import errorHandler from "../errorHandler/dbErrorHandler.js";

const signup = (req, res) => {
  const newUser = new User(req.body); // User is from userModel
  console.log("req.boby", req.body);
  newUser.save((err, newUser) => {
    if (err) {
      return res.status(400).json({
        err: errorHandler(err),
      });
    }
    newUser.salt = undefined;
    newUser.hashed_password = undefined;
    res.json({
      newUser,
    });
  });
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

export { signup, signin, signout };
