const mongoose = require("mongoose");

const SaleSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  zipcode: {
    type: String,
    required: true,
  },
  cellphone: {
    type: Number,
    required: true,
  },
  references: {
    type: String,
    required: false,
  },
  paymenttype: {
    type: String,
    required: true,
  },
  cardname: {
    type: String,
    required: true,
  },
  cardnumber: {
    type: Number,
    required: true,
  },
  cardexpire: {
    type: String,
    required: true,
  },
  cardcode: {
    type: Number,
    required: true,
  },
  saledetail: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Sale", ProductSchema);
