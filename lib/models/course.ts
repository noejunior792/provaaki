import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  institution: { type: mongoose.Schema.Types.ObjectId, ref: "Institution", required: true },
}, { timestamps: true });

export const Course = mongoose.models.Course || mongoose.model("Course", courseSchema);