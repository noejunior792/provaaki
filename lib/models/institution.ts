import mongoose from "mongoose";

const institutionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  country: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
}, { timestamps: true });

export const Institution = mongoose.models.Institution || mongoose.model("Institution", institutionSchema);