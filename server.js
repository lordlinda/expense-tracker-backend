const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const db = require("./db");

const Transaction = require("./models/Transaction");

const app = express();
//middleware
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

//@route /transactions
//@description GET all transactions
app.get("/transactions", async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.status(200);
    res.json({ transactions });
  } catch (error) {
    res.status(500);
    res.json(error);
  }
});

//@route /transactions
//@description POST a transaction
app.post("/transactions", async (req, res) => {
  try {
    const transaction = await Transaction.create(req.body);
    res.status(200);
    res.json({ transaction });
  } catch (error) {
    res.status(500);
    res.json(error);
  }
});
//@route /transactions
//@description DELETE a transaction
app.delete("/transaction/:id", async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    transaction.delete();
    res.status(200);
    res.json({ msg: "transaction deleted" });
  } catch (error) {
    res.status(500);
    res.json(error);
  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.info(`Server listen on port ${PORT}`);
});
