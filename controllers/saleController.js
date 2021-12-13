const Sale = require("../models/Sale");

exports.createSale = async (req, res) => {
  try {
    let sale = new Sale(req.body);
    await sale.save();
    res.send(sale);
  } catch (error) {
    console.log("error");
    res.status(500).send("There was a mistake, please comunicate with IT Team");
  }
};

exports.getSales = async (req, res) => {
  try {
    let sales = await Sale.find();
    res.json(sales);
  } catch (error) {}
};

exports.getSale = async (req, res) => {
  try {
    let sale = await Sale.findById(req.params.id);
    if (!sale) {
      res.status(404).json({ error: "The sale does not exits" });
    }
    res.json(sale);
  } catch (error) {
    console.log(error);
    res.status(500).send("There was a mistake, please comunicate with IT Team");
  }
};

exports.updateSale = async(req, res) => {
  try {
      console.log(req.body)
      const { name,
        email,
        state,
        city,
        address,
        zipcode,
        cellphone,
        references,
        paymenttype,
        cardname,
        cardnumber,
        cardexpire,
        cardcode,
        saledetail} = req.body
      let data_sale = await Sale.findById(req.params.id)

      if (!data_sale) {
          res.status(404).json({ error: "The product does not exits" })
      }

      data_sale.name = name;
      data_sale.email = email;
      data_sale.state = state;
      data_sale.city = city;
      data_sale.address = address;
      data_sale.zipcode = zipcode;
      data_sale.cellphone = cellphone;
      data_sale.references = references;
      data_sale.paymenttype = paymenttype;
      data_sale.cardname = cardname;
      data_sale.cardnumber = cardnumber;
      data_sale.cardexpire = cardexpire;
      data_sale.cardcode = cardcode;
      data_sale.saledetail = saledetail;

      data_product = await Product.findOneAndUpdate({ _id: req.params.id }, data_product, { new: true });
      res.json(data_producto)

  } catch (error) {
      console.log(error);
      res.status(500).send('There was a mistake, please comunicate with IT Team');
  }
}

exports.deleteProducto = async(req, res) => {
  try {
      let data_product = await Product.findById(req.params.id);
      if (!data_product) {
          res.status(404).json({ msg: "The product does not exists" })
      }

      await Product.findOneAndRemove({ _id: req.params.id });
      res.json({ msg: 'The product has been deleted' });

  } catch (error) {
      console.log(error);
      res.status(500).send('There was a mistake, please comunicate with IT Team');
  }
}