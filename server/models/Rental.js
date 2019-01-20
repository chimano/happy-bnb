let mongoose = require('mongoose')
let validator = require('validator')

let schema = new mongoose.Schema({
  
  latitude: {
      type: Number,
      required: true,
  },
  longitude: {
      type: Number,
      required: true,
  },
  rating: {
      type: Number,
      required: true,
  }, 
  category: {
      type: String,
      required: true
  }
  
});

module.exports = mongoose.model('Rental', schema)
