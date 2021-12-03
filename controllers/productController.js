const Product = require("../models/Product");

exports.createProduct = async (req, res) => {
  //   console.log("creating the product....");
  //   console.log(req.body);
  try {
    let product = new Product(req.body);
    await product.save();
    res.send(product);
  } catch (error) {
    console.log("error");
    res.status(500).send("There was a mistake, please comunicate with IT Team");
  }
};

exports.getProducts = async (req, res) => {
  try {
    let products = await Product.find();
    res.json(products);
  } catch (error) {}
};

exports.getProduct = async (req, res) => {
  try {
    let Product = await Product.findById(req.params);
    if (!producto) {
      res.status(404).json({ error: "The product does not exits" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("thre was an erro");
  }
};

// exports.actualizaProducto = async (req, res) => {
//   try {
//   } catch (error) {
//     console.log(error);
//     res.status(500).send();
//   }
// };
