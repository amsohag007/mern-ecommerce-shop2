import Category from "../models/categoryModel.js";
import errorHandler from "../errorHandler/dbErrorHandler.js";

const createCatagory = (req, res) => {
  const category = new Category(req.body);
  category.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json({ data });
  });
};

export { createCatagory };
