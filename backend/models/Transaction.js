const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true},
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    sold: { type: Boolean, default: false },
    dateOfSale: { type: Date, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Transaction', transactionSchema);
