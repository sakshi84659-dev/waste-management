const express = require("express");
const router = express.Router();
const Complaint = require("../models/Complaint");

// CREATE
router.post("/", async (req, res) => {
  const data = await Complaint.create(req.body);
  res.json(data);
});

// READ
router.get("/", async (req, res) => {
  const data = await Complaint.find();
  res.json(data);
});

// UPDATE
router.put("/:id", async (req, res) => {
  const data = await Complaint.findByIdAndUpdate(req.params.id, req.body);
  res.json(data);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Complaint.findByIdAndDelete(req.params.id);
  res.json("Deleted");
});

module.exports = router;