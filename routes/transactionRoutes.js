const express = require("express");
const { model } = require("mongoose");
const {
  addTransaction,
  getAllTransaction,
  editTransaction,
  deleteTransaction,
} = require("../controllers/transactionController.js");

//router object
const router = express.Router();

//ROUTES
//GET TRANSACTIONS
router.post("/get-transaction", getAllTransaction);

//ADD TRANSACTION POST METHOD
router.post("/add-transaction", addTransaction);

//EDIT TRANSACTION
router.post("/edit-transaction", editTransaction);

//DELETE TRANSACTION
router.post("/delete-transaction", deleteTransaction);
module.exports = router;
