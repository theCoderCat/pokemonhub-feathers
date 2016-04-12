'use strict';

// box-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const boxSchema = new Schema({
  number: {type: String, required: true, unique: true},
  name: { type: String, required: false },
  private: { type: Boolean, required: true },
  notes: { type: String, required: false },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const boxModel = mongoose.model('box', boxSchema);

module.exports = boxModel;