import mongoose, { Schema } from "mongoose";
const shortid = require("shortid");

const subcategorySchema = new Schema(
  {
    sub_cat_id: {
      type: String,
      default: shortid.generate,
    },
    cat_name: {
      type: String,
    },
    subcat_name: {
      type: String,
    },
    url: {
      type: String,
      required: true,
    },
    cat_img: {
      type: String,
    },
    imagealt: {
      type: String,
    },
    // vedio: {
    //     type: String
    // },
    // vedioalt: {
    //     type: String
    // },
    // banner: {
    //     type: String
    // },
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

const Subcategory =
  mongoose.models.Subcategory ||
  mongoose.model("Subcategory", subcategorySchema, "subcategory");

export default Subcategory;
