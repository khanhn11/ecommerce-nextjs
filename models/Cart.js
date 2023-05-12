const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Cart = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.models.Cart || mongoose.model("Cart", Cart);
