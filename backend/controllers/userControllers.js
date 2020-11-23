import User from "../models/userModel.js";
import errorHandler from "../errorHandler/dbErrorHandler.js";

const signup = (req, res) => {
  const newUser = new User(req.body);
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

export default signup;
