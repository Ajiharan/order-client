import mongoose from "mongoose";

const Schema = mongoose.Schema;

const InterestSchema = new Schema({
  uid: {
    required: true,
    type: String,
  },
  cars: {
    default: false,
    type: Boolean,
  },
  books: {
    default: false,
    type: Boolean,
  },
  watches: {
    default: false,
    type: Boolean,
  },
  laptops: {
    default: false,
    type: Boolean,
  },
});

export const InterestesSchema = mongoose.model(
  "InterestesSchema",
  InterestSchema
);
