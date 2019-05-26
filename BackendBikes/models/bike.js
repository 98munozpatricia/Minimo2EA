'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema


const BikeSchema = new Schema({
    name: {type: String, unique:true, required: true},
    kms: {type: String},
    description: { type: String, required: true},
    status: {type: Boolean, required: true},
})


module.exports = mongoose.model('Bikes', BikeSchema)