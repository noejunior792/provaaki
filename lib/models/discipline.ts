import mongoose from "mongoose";

const disciplineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  course: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
}, { timestamps: true });

export const Discipline = mongoose.models.Discipline || mongoose.model("Discipline", disciplineSchema);