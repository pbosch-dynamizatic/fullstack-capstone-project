const express = require('express');
const router = express.Router();
const { connectToDatabase } = require('../models/db');   // ✅

// GET /api/gifts - Retrieve all gifts
router.get('/', async (req, res) => {
  try {
    const db = await connectToDatabase();
    const collection = db.collection("gifts");
    const gifts = await collection.find({}).toArray();
    res.json(gifts);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve gifts" });
  }
});

// GET /api/gifts/:id - Retrieve a specific gift by ID
router.get('/:id', async (req, res) => {
  try {
    // Task 1: Connect to MongoDB and store connection to db constant
    const db = await connectToDatabase();

    // Task 2: Use the collection() method to retrieve the gift collection
    const collection = db.collection("gifts");

    // Task 3: Find a specific gift by ID and store in constant called gift
    const id = req.params.id;
    const gift = await collection.findOne({ id: id });

    res.json(gift);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve gift" });
  }
});

module.exports = router;