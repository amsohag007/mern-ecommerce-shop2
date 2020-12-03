import { Order, CartItem } from "../models/orderModel.js";
// const { errorHandler } = require("../helpers/dbErrorHandler");
// sendgrid for email npm i @sendgrid/mail
// const sgMail = require("@sendgrid/mail");
// sgMail.setApiKey(
//   "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"
// );

const orderById = (req, res, next, id) => {
  Order.findById(id)
    .populate("products.product", "name price")
    .exec((err, order) => {
      if (err || !order) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      req.order = order;
      next();
    });
};

const createOrder = (req, res) => {
  console.log("CREATE ORDER: ", req.body);
  req.body.order.user = req.profile;
  const order = new Order(req.body.order);
  order.save((error, data) => {
    if (error) {
      return res.status(400).json({
        error: errorHandler(error),
      });
    }
    // send email alert to admin
    // order.address
    // order.products.length
    // order.amount
    /////////////////////////////
    //email order info to client
    // const emailData = {
    //   to: "kaloraat@gmail.com",
    //   from: "noreply@ecommerce.com",
    //   subject: `A new order is received`,
    //   html: `
    //         <p>Customer name:</p>
    //         <p>Total products: ${order.products.length}</p>
    //         <p>Total cost: ${order.amount}</p>
    //         <p>Login to dashboard to the order in detail.</p>
    //     `,
    // };
    // sgMail.send(emailData);
    //////////////////////////////
    res.json(data);
  });
};

const listOfOrders = (req, res) => {
  Order.find()
    .populate("user", "_id name address")
    .sort("-created")
    .exec((err, orders) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(error),
        });
      }
      res.json(orders);
    });
};

const getStatusValues = (req, res) => {
  res.json(Order.schema.path("status").enumValues);
};

const updateOrderStatus = (req, res) => {
  Order.update(
    { _id: req.body.orderId },
    { $set: { status: req.body.status } },
    (err, order) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      res.json(order);
    }
  );
};

export {
  orderById,
  createOrder,
  listOfOrders,
  getStatusValues,
  updateOrderStatus,
};
