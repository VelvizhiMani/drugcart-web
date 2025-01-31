import mongoose, { Schema } from "mongoose";
const shortid = require("shortid");

const formSchema = new Schema(
  {
    formid: {
      type: String,
      default: shortid.generate,
    },
    formname: {
      type: String,
    },
    formurl: {
      type: String,
    },
    picture: {
      type: String,
    },
    alt: {
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

const Form = mongoose.models.Form || mongoose.model("Form", formSchema, "Form");

export default Form;
