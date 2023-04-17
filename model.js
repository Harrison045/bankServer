const mongoose = require("mongoose")

const BankSchema = mongoose.Schema({
  name: String,
  location: String,
  branch: String,
  address: String,
  accountNumber: String,
})

const BankModel = mongoose.model("Bank", BankSchema)

module.exports = BankModel