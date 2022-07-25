const express = require('express');
const router = express.Router();

//Model

const Model = require('../models/model')

// GET all 
router.get('/', async (req, res) => {
    const data = await Model.find();
    res.json(data);
  });
  
// GET one 
router.get('/:id', async (req, res) => {
    const data = await Model.findById(req.params.id);
    res.json(data);
  });

  // ADD a new 
  
router.post('/', async (req, res) => {
    const { title, description } = req.body;
    const data = new Model({title, description});
    await data.save();
    res.json({status: 'Saved'});
  });

// UPDATE 
router.put('/:id', async (req, res) => {
    const { title, description } = req.body;
    const newData = {title, description};
    await Model.findByIdAndUpdate(req.params.id, newData);
    res.json({status: 'Updated'});
  });

  //Delete

  router.delete('/:id', async (req, res) => {
    await Model.findByIdAndRemove(req.params.id);
    res.json({status: 'Task Deleted'});
  });

  module.exports = router;