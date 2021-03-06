const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const HistorySchema = new Schema({
  username: { type: String, max: 100 },
  date: { type: Date, default: new Date() },
  id: { type: String, required: true, max: 100 },
  amount: { type: Number, required: true },
  value: { type: Number },
  amountType: { type: String, required: true },
  type: { type: String, required: true },
  email: { type: String, required: true, max: 100 },
  site: { type: String, default: null },
  address: { type: String, default: null }
});

module.exports = mongoose.model('History', HistorySchema);
