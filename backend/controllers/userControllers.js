import User from "../models/userModel.js";

const signup = (req, res) => {
  const user = new User(req.body);
  console.log("req.boby", req.body);
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        err,
      });
    }
    res.json({
      user,
    });
  });
};

export default signup;
