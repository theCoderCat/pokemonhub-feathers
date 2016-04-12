'use strict';

// user-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
    Box: {
        type: Number,
        required: true,
    },
    Row: {
        type: Number,
        required: true,
    },
    Column: {
        type: Number,
        required: true,
    },
    Species: {
        type: String,
        required: true,
    },
    Nature: {
        type: String,
        required: true,
    },
    Ability: {
        type: String,
        required: true,
    },
    Ball: {
        type: String,
        required: false,
    },
    HP: {
        type: Number,
        required: true,
    },
    ATK: {
        type: Number,
        required: true,
    },
    DEF: {
        type: Number,
        required: true,
    },
    SpA: {
        type: Number,
        required: true,
    },
    SpD: {
        type: Number,
        required: true,
    },
    Spe: {
        type: Number,
        required: true,
    },
    E_HP: {
        type: Number,
        required: false,
    },
    E_ATK: {
        type: Number,
        required: false,
    },
    E_DEF: {
        type: Number,
        required: false,
    },
    E_SpA: {
        type: Number,
        required: false,
    },
    E_SpD: {
        type: Number,
        required: false,
    },
    E_SpE: {
        type: Number,
        required: false,
    },
    Move1: {
        type: String,
        required: false,
    },
    Move2: {
        type: String,
        required: false,
    },
    Move3: {
        type: String,
        required: false,
    },
    Move4: {
        type: String,
        required: false,
    },
    EggMove1: {
        type: String,
        required: false,
    },
    EggMove2: {
        type: String,
        required: false,
    },
    EggMove3: {
        type: String,
        required: false,
    },
    EggMove4: {
        type: String,
        required: false,
    },
    OT: {
        type: String,
        required: true,
    },
    TID: {
        type: Number,
        required: true,
    },
    TSV: {
        type: Number,
        required: true,
    },
    ESV: {
        type: Number,
        required: false,
    },
    isHacked: {
        type: Boolean,
        required: false,
    },
    forTrade: {
        type: Boolean,
        required: false,
    },
    private: {
        type: Boolean,
        required: false,
    },
    notes: {
        type: String,
        required: false,
    },
    createdAt: {
        type: Date,
        'default': Date.now
    },
    updatedAt: {
        type: Date,
        'default': Date.now
    }
});

const pokemonModel = mongoose.model('pokemon', pokemonSchema);

module.exports = pokemonModel;