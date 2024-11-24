import mongoose from "mongoose";

const testSchema = new mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  institution: { type: mongoose.Schema.Types.ObjectId, ref: "Institution", required: true },
  course: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
  discipline: { type: mongoose.Schema.Types.ObjectId, ref: "Discipline", required: true },
  class: { type: String, required: true },
  periodType: { type: String, enum: ["SEMESTER", "YEAR", "QUARTER"], required: true },
  periodNumber: { type: Number, required: true },
  year: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  comments: [{
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    content: String,
    createdAt: { type: Date, default: Date.now }
  }]
}, { timestamps: true });

export const Test = mongoose.models.Test || mongoose.model("Test", testSchema);