const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Order = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
    quantity: {
      type: Number,
      default: 1,
    },
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

module.exports = mongoose.models.Order || mongoose.model("Order", Order);
