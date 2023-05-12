const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    account: {
      type: Schema.Types.ObjectId,
      ref: "Account",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.models.User || mongoose.model("User", User);
