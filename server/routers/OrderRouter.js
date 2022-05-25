import { AddressesSchema } from "../models/AddressSchema.js";
import { DetailsSchema } from "../models/DetailSchema.js";
import { InterestesSchema } from "../models/InterestSchema.js";
import express from "express";
import { logger } from "../logs/logger.js";

const router = express.Router();

router.post("/user", async (req, res) => {
  try {
    const myDetails = req.body;
    const saveDetails = await new DetailsSchema(myDetails).save();
    if (!saveDetails) {
      logger.error("cannot add my details");
      return res.status(400).json("cannot add my details");
    }
    return res
      .status(200)
      .json({ uid: saveDetails._id, message: "sucessfully added" });
  } catch (err) {
    logger.error(err);
    res.status(500).json(err);
  }
});

router.post("/address", async (req, res) => {
  const addressData = req.body;
  try {
    const saveDetails = await new AddressesSchema(addressData).save();
    if (!saveDetails) {
      await DetailsSchema.findByIdAndDelete(addressData.uid);
      logger.error("cannot add my address");
      return res.status(400).json("cannot add my address");
    }
    return res.status(200).json("sucessfully added");
  } catch (err) {
    await DetailsSchema.findByIdAndDelete(addressData.uid);
    logger.error(err);
    res.status(500).json(err);
  }
});

router.post("/interest", async (req, res) => {
  const interestData = req.body;
  try {
    const saveDetails = await new InterestesSchema(interestData).save();
    if (!saveDetails) {
      await DetailsSchema.findByIdAndDelete(interestData.uid);
      logger.error("cannot add my interest");
      return res.status(400).json("cannot add my interest");
    }
    return res.status(200).json("sucessfully added");
  } catch (err) {
    await DetailsSchema.findByIdAndDelete(interestData.uid);
    logger.error(err);
    res.status(500).json(err);
  }
});

export default router;
