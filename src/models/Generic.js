import mongoose from "mongoose";
const shortid = require("shortid");

const genericSchema = new mongoose.Schema(
  {
    generics_id: {
      type: String,
      default: shortid.generate,
    },
    catnames: {
      type: String,
      required: true,
    },
    subname: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    generices: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    imagealt: {
      type: String,
    },
    vedio: {
      type: String,
    },
    vedioalt: {
      type: String,
    },
    description: {
      type: String,
    },
    usesofmeds: {
      type: String,
    },
    useofbenefits: {
      type: String,
    },
    indicat: {
      type: String,
    },
    mechanism: {
      type: String,
    },
    medicinework: {
      type: String,
    },
    contraindications: {
      type: String,
    },
    sideeffects: {
      type: String,
    },
    faqs: {
      type: String,
    },
    pregnancy: {
      type: String,
    },
    breastfeeding: {
      type: String,
    },
    kidneyproblem: {
      type: String,
    },
    liverdisease: {
      type: String,
    },
    asthma: {
      type: String,
    },
    takemedicine: {
      type: String,
    },
    adult: {
      type: String,
    },
    childrenmed: {
      type: String,
    },
    elderlymed: {
      type: String,
    },
    alcohol: {
      type: String,
    },
    heartdisease: {
      type: String,
    },
    driving: {
      type: String,
    },
    warnings: {
      type: String,
    },
    talkdoctor: {
      type: String,
    },
    instructions: {
      type: String,
    },
    druginteraction: {
      type: String,
    },
    drugfood: {
      type: String,
    },
    drugdiease: {
      type: String,
    },
    fooditems: {
      type: String,
    },
    overdose: {
      type: String,
    },
    misseddose: {
      type: String,
    },
    disposal: {
      type: String,
    },
    fasttag: {
      type: String,
    },
    refer: {
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

const Generic =
  mongoose.models.Generic ||
  mongoose.model("Generic", genericSchema, "generic");

export default Generic;
