import mongoose, { Schema } from "mongoose";
const shortid = require("shortid");

const packageSchema = new Schema(
  {
    packageid: {
      type: String,
      default: shortid.generate,
    },
    packagename: {
      type: String,
    },
    packageurl: {
      type: String,
    },
    status: {
      type: String,
      default: "Active",
    },
    adduser: {
      type: String,
      default: 1,
    },
    updateuser: {
      type: String,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

const Package =
  mongoose.models.Package ||
  mongoose.model("Package", packageSchema, "package");

export default Package;
