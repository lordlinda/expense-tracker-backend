const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var transactionSchema = new Schema({
  text: String,
  amount: Number,
});
// Compile model from schema
module.exports = mongoose.model("Transaction", transactionSchema);
