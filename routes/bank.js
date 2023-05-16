const express = require("express");
const {
  listBanksController,
  createBanksController,
  updateBanksController,
  deleteBanksController,
} = require("../controllers/banks");

const router = express.Router();

router.get("/bank/:id?", listBanksController);
//create bank - post method
router.post("/bank", createBanksController);
// update bant - put method
router.put("/bank", updateBanksController);
//delete bank - delete method
router.delete("/bank", deleteBanksController);

module.exports = router;
