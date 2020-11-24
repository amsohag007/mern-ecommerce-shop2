import Category from "../models/categoryModel.js";
import errorHandler from "../errorHandler/dbErrorHandler.js";

const categoryById = (req, res, next, id) => {
  Category.findById(id).exec((err, category) => {
    if (err || !category) {
      return res.status(400).json({
        error: "Category does not exist",
      });
    }
    req.category = category;
    next();
  });
};

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

const readCategory = (req, res) => {
  return res.json(req.category);
};

const updateCategory = (req, res) => {
  console.log("req.body", req.body);
  console.log("category update param", req.params.categoryId);

  const category = req.category;
  category.name = req.body.name;
  category.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json(data);
  });
};

const deleteCategory = (req, res) => {
  const category = req.category;
  Category.find({ category }).exec((err, data) => {
    if (data.length >= 1) {
      return res.status(400).json({
        message: `Sorry. You cant delete ${category.name}. It has ${data.length} associated products.`,
      });
    } else {
      category.remove((err, data) => {
        if (err) {
          return res.status(400).json({
            error: errorHandler(err),
          });
        }
        res.json({
          message: "Category deleted",
        });
      });
    }
  });
};

const catagoryList = (req, res) => {
  Category.find().exec((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json(data);
  });
};

export {
  categoryById,
  createCatagory,
  readCategory,
  updateCategory,
  deleteCategory,
  catagoryList,
};
