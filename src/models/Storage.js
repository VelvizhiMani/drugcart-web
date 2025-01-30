import mongoose, { Schema } from "mongoose";
const shortid = require("shortid");

const storageSchema = new Schema(
  {
    storageid: {
      type: String,
      default: shortid.generate,
    },
    storagename: {
      type: String,
    },
    storageurl: {
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

const Storage =
  mongoose.models.Storage ||
  mongoose.model("Storage", storageSchema, "storage");

export default Storage;
