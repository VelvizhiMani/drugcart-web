import mongoose from "mongoose";
const shortid = require("shortid");

const categorySchema = new mongoose.Schema(
  {
    cat_id: {
      type: String,
      default: shortid.generate,
    },
    cat_type: {
      type: String,
    },
    category_name: {
      type: String,
    },
    url: {
      type: String,
    },
    cat_img: {
      type: String,
    },
    imagealt: {
      type: String,
    },
    metatitle: {
      type: String,
    },
    metakeyword: {
      type: String,
    },
    metadesc: {
      type: String,
    },
    status: {
      type: String,
      default: "Active",
    },
  },
  {
    timestamps: true,
  }
);

const Category =
  mongoose.models.Category ||
  mongoose.model("Category", categorySchema, "category");

export default Category;

Hepatitis -  hepatitis-drug