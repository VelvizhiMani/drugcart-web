import mongoose, { Schema } from "mongoose";
const mongoose = require("mongoose")

const subcategorySchema = new Schema(
    {
        cat_name: {
            type: String,
            // trim: true
        },
        subcat_name: {
            type: String
        },
        url: {
            type: String,
        },
        sub_cat_img: {
            type: String
        },
        imagealt: {
            type: String
        },
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
            type: String
        },
    }, { timestamps: true })

// we will create a new collection
const Subcategory = mongoose.models.Subcategory || mongoose.model("Subcategory", subcategorySchema, "subcategory");

module.exports = Subcategory;