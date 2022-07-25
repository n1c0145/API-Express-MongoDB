
const mongoose = require('mongoose');
const { Schema } = mongoose;

const ModelSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true }
});

module.exports = mongoose.model('Model', ModelSchema);