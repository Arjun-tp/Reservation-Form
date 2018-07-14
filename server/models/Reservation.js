'use strict';

var mongoose = require('mongoose')
// Schema
var schema = new mongoose.Schema({
    name: {type: String},
    number: {type: Number},
    email: {type: String},
    noOfGuests: {type: Number},
    timeOfReservation : {type: String},
    comments : {type: String}
  });


// Model
var model = mongoose.model('reservation', schema);

// Public API
module.exports = model;