const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Category = new Schema(
  {
    title: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.Category || mongoose.model("Category", Category);
