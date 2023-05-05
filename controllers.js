const BankModel = require("./model");
//controllers

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
  BankModel.findByIdAndDelete(id).then((deletedBank) => {
    if(deletedBank){
       res.json({ message: "bank deleted", data: deletedBank });
       return
    }
    res.json({message: "bank not found"})
   
  });
};

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

const createAccountController=(req, res) =>{
  const {name,number,accountType,bankId} = req.body;

  const account = new AccountModel({name,number,accountType,bankId})

  account.save().then(result =>{
   if(result)
    res.json({message:"Account created", data:result})
   else({message:"Failed to create Account"})
  })
}

module.exports = {
  listBanksController,
  updateBanksController,
  createBanksController,
  deleteBanksController,
  createAccountController,
};
