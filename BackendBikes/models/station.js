'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema


const StationSchema = new Schema({
    name: {type: String, unique:true, required: true},
    state: {type: Boolean},
    description: { type: String, required: true},
    bikes: [{
        type: Schema.Types.ObjectId,
        ref: 'Bike'
    }],
    
})


module.exports = mongoose.model('Station', StationSchema)