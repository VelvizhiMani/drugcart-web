import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      default: ""
    },
    phone: {
      type: String,
    },
    useremail: {
      type: String,
      default: ""
    },
    leveltype: {
      type: String,
      default: ""
    },
    isdel: {
      type: String,
      default: ""
    },
    deluser: {
      type: String,
      default: ""
    },
    salary: {
      type: String,
      default: ""
    },
    date: {
      type: Date,
      default: Date.now,
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

const User = mongoose.models.User || mongoose.model("User", userSchema, "user");

export default User;
