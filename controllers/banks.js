const BankModel = require("../models/bankModel");
const AccountModel = require("../models/accountModel");
const {validationResult} = require('express-validator')
const listBanksController = (req, res) => {
  // list of bank
  const { id } = req.params;

  if (id) {
    BankModel.find({ _id: id })
      .then((bank) => {
        res.json({ data: bank });
      })
      .catch((err) => console.log(err));
  } else {
    BankModel.find()
      .then((bank) => {
        res.json({ data: bank });
      })
      .catch((err) => console.log(err));
  }
};

const createBanksController = (req, res) => {
  //validation checks

  const errors = validationResult(req)
  if(!errors.isEmpty()){
    console.log(errors)
    return res.json({message:errors.array()[0].msg})
  }
  const { name, location, branch, phone, address, accountNumber } = req.body;
  const bank = new BankModel({
    name,
    location,
    branch,
    phone,
    address,
    accountNumber,
  });
  bank
    .save()
    .then((result) => {
      res.json({ message: "bank created", data: result });
    })
    .catch((error) => console.log(error));
};

const updateBanksController = (req, res) => {
  //update a bank
  const { id, name, location, branch, phone, address, accountNumber } =
    req.body;

  BankModel.findById(id)
    .then((bank) => {
      if (bank) {
        bank.name = name;
        bank.location = location;
        bank.branch = branch;
        bank.phone = phone;
        bank.address = address;
        bank.accountNumber = accountNumber;

        bank.save();

        res.json({ message: "bank updates", data: bank });
      }
      res.json({ message: "Document not found" });
    })
    .catch((error) => console.log(error));
  // const updates = BankModel.update({
  //   name,
  //   location,
  //   branch,
  //   phone,
  //   address,
  //   accountNumber,
  // });
  // res.json({ message: "bank updates", data: updates  });
};

const deleteBanksController = (req, res) => {
  //delete a bank
  const { id } = req.body;
  BankModel.findByIdAndRemove(id).then((deletedBank) => {
    if (deletedBank) {
      AccountModel.deleteMany({ bankId: deletedBank._id })
        .then((result) => {
          res.json({ message: "bank deleted", data: deletedBank });
        })
        .catch((err) => console.log(err));

      return;
    }
    res.json({ message: "bank not found" });
  });
};

module.exports = {
  listBanksController,
  updateBanksController,
  createBanksController,
  deleteBanksController,
};
