const BankModel = require("./model");
//controllers

// const listBanksController = (req, res) => {
//   // list of bank
//   const banks = BankModel.all();
//   res.json({ data: banks });
// };

const createBanksController = (req, res) => {
  //create a bank
  const { name, location, branch, phone, address, accountNumber } = req.body;
  const bank = new BankModel({
    name,
    location,
    branch,
    phone,
    address,
    accountNumber,
  });
  bank.save().then(results=>{
    res.json({ message: "bank created", data: results });
  }).catch(error => console.log(error))
  
};

// const updateBanksController = (req, res) => {
//   //update a bank
//   const { name, location, branch, phone, address, accountNumber } = req.body;
//   const updates = BankModel.update({
//     name,
//     location,
//     branch,
//     phone,
//     address,
//     accountNumber,
//   });
//   res.json({ message: "bank updates", data: updates  });
// };

// const deleteBanksController = (req, res) => {
//   //delete a bank
//   const { name } = req.body;
//   const deletedBanks = BankModel.delete({ name });
//   res.json({ message: "bank deleted", data: deletedBanks });
// };

// const updateBanksController = (req, res) => {
//   //delete a bank
//   const { name,
//     location,
//     branch,
//     phone,
//     address,
//     accountNumber, } = req.body;
//   const updatedBanks = BankModel.update({ name,
//     location,
//     branch,
//     phone,
//     address,
//     accountNumber });
//   res.json({ message: "updated bank", data: updatedBanks });
// };

module.exports = {
  // listBanksController,
  // updateBanksController,
  createBanksController,
  //  
};
