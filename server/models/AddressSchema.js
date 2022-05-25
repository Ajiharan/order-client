import mongoose from "mongoose";

const Schema = mongoose.Schema;

const AddressSchema = new Schema({
  uid: {
    required: true,
    type: String,
  },
  address1: {
    required: true,
    type: String,
  },
  address2: {
    default: null,
    type: String,
  },
  state: {
    required: null,
    type: String,
  },
  city: {
    required: true,
    type: String,
  },
  postcode: {
    required: true,
    type: Number,
  },
});

export const AddressesSchema = mongoose.model("AddressesSchema", AddressSchema);
