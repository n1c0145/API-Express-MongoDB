const express = require("express");
const router = express.Router();

//Model

const Model = require("../models/model");

// GET all

router.get("/", async (req, res) => {
  try {
    const data = await Model.find();
    res.status(200);
    res.json(data);
  } catch (error) {
    res.status(500).send({message:"Error"});
  }
});

// GET one
router.get("/:id", async (req, res) => {
  try {
    const data = await Model.findById(req.params.id);
    res.status(200);
    res.json(data);
  } catch (error) {
    res.status(500).send({message:"Error"});
  }
});

// ADD a new

router.post("/", async (req, res) => {
  try {
    const { title, description } = req.body;
    const data = new Model({ title, description });
    await data.save();
    res.status(201);
    res.json({ status: "Created" });
  } catch (error) {
    res.status(500).send({message:"Error"});
  }
});

// UPDATE
router.put("/:id", async (req, res) => {
  try {
    const { title, description } = req.body;
    const newData = { title, description };
    await Model.findByIdAndUpdate(req.params.id, newData);
    res.status(200);
    res.json({ status: "Updated" });
  } catch (error) {
    res.status(500).send({message:"Error"});
  }
});

//Delete

router.delete("/:id", async (req, res) => {
  try {
    await Model.findByIdAndRemove(req.params.id);
    res.status(200);
    res.json({ status: "Deleted" });
  } catch (error) {
    res.status(500).send({message:"Error"});
  }
});

module.exports = router;
