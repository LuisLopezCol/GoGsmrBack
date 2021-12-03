const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  short_description: {
    type: String,
    // required: true,
  },
  game_url: {
    type: String,
    // required: true,
  },
  genre: {
    type: Date,
    // required: true,
  },
  platform: {
    type: Date,
    // required: true,
  },
  publisher: {
    type: Date,
    // required: true,
  },
  developer: {
    type: Date,
    // required: true,
  },
  release_date: {
    type: Date,
    // required: true,
  },
  freetogame_profile_url: {
    type: Date,
    // required: true,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
