import mongoose, { Schema } from "mongoose";
const shortid = require("shortid");

const manufactuerSchema = new Schema(
  {
    manufactuerid: {
      type: String,
      default: shortid.generate,
    },
    manufactuername: {
      type: String,
      required: true,
    },
    manufactuerurl: {
      type: String,
      required: true,
    },
    manufactueraddress: {
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
    adddate: {
      type: Date,
      default: Date.now,
    },
    adduser: {
      type: String,
      default: "Staff",
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

const Manufactuer =
  mongoose.models.Manufactuer ||
  mongoose.model("manufactuer", manufactuerSchema);

export default Manufactuer;
