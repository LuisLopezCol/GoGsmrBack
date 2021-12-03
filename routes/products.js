const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// router.get("/", (req, res) => {
//   res.send("hola mundo");
// });

// router.post("./", () => {
//   console.log("creating product");
// });

router.get("/", productController.getProducts);
router.post("/", productController.createProduct);
// router.get("/id", productController.getProduct);
// router.get("/id", productController.getProduct);

module.exports = router;
