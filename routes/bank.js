const express = require("express");
const { body } = require("express-validator");
const {
  listBanksController,
  createBanksController,
  updateBanksController,
  deleteBanksController,
} = require("../controllers/banks");
const BankModel = require("../models/bankModel");

const router = express.Router();

router.get("/bank/:id?", listBanksController);
//create bank - post method
router.post(
  "/bank",
  [
    body("name").trim().not().isEmpty().withMessage("Name cannot be empty"),
    body('location').trim().not().isEmpty().withMessage("Location cannot be empty"),
    body('branch').trim().not().isEmpty().withMessage("Branch cannot be empty"),
    body('phone').isMobilePhone('en-GH').custom((value, {req}) => {
      return BankModel.findOne({'phone':value}).then(
        bankDoc => {
          if(bankDoc)
          return Promise.reject('Phone number is already been used')
        }
      )
    })
  ],
  createBanksController
);
// update bant - put method
router.put("/bank", updateBanksController);
//delete bank - delete method
router.delete("/bank", deleteBanksController);

module.exports = router;
