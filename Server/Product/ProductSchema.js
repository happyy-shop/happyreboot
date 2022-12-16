const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,

      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: false,
    },
    color: {
      type: String,
      required: false,
    },
    gender: {
      type: String,
      required: false,
    },
    posted_at: {
      type: String,
      required: false,
    },
    adminId: {
      type: String,
      required: false,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
