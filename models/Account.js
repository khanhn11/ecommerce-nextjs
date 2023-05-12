const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Account = new Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isVerified: {
      type: Boolean,
      default: true,
    },
    isAdmin: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.models.Account || mongoose.model("Account", Account);
