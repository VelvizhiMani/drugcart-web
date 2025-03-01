import mongoose, { Schema } from "mongoose";

const addressSchema = new Schema(
  {
    cus_id: {
      type: String,
      default: ""
    },
    cus_name: {
      type: String,
      default: ""
    },
    lastname: {
      type: String,
      default: ""
    },
    email: {
      type: String,
      default: ""
    },
    dob: {
      type: String,
      default: ""
    },
    age: {
      type: String,
      default: ""
    },
    gender: {
      type: String,
      default: ""
    },
    address: {
      type: String,
      default: ""
    },
    postcode: {
      type: String,
      default: ""
    },
    state: {
      type: String,
      default: ""
    },
    country: {
      type: String,
      default: ""
    },
    town: {
      type: String,
      default: ""
    },
    del_name: {
      type: String,
      default: ""
    },
    del_lastname: {
      type: String,
      default: ""
    },
    del_email: {
      type: String,
      default: ""
    },
    del_phone: {
      type: String,
      default: ""
    },
    del_city: {
      type: String,
      default: ""
    },
    del_state: {
      type: String,
      default: ""
    },
    del_country: {
      type: String,
      default: ""
    },
    del_pincode: {
      type: String,
      default: ""
    },
    del_address: {
      type: String,
      default: ""
    },
    status: {
      type: String,
      default: ""
    },
    timestamp: {
      type: Date,
      default: Date.now
    },
    updated_at: {
      type: Date,
      default: Date.now
    },
  }
);
const Customer =
  mongoose.models.Customer ||
  mongoose.model("Customer", addressSchema, "customer");

export default Customer;
