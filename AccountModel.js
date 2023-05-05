const mongoose = require("mongoose");
const Schema = mongoose.schema;

const AccountSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  accountType: {
    type: String,
    required: true,
  },
  bankId: {
    type: Schema.Types.ObjectId,
    ref: "Bank",
    required: true,
  },
});

module.export = mongoose.model("Account", AccountSchema);
