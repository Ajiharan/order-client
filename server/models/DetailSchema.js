import mongoose from "mongoose";

const Schema = mongoose.Schema;

const DetailSchema = new Schema({
  firstName: {
    required: true,
    type: String,
  },
  lastName: {
    default: null,
    type: String,
  },
  phoneNo: {
    default: null,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
});

export const DetailsSchema = mongoose.model("DetailsSchema", DetailSchema);
