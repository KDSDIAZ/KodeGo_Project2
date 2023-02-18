const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  dish: {
    type: String,
    required: true
  },
  ingredients: {
    type: String,
    required: true
  },
  procedure: {
    type: String,
    required: true
  },
  recipeImage: {
    type: String,
    required: true
  }
}, { timestamps: true });

const recipeDB = mongoose.model('recipes', recipeSchema);
module.exports = recipeDB;