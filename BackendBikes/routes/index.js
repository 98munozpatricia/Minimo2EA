'use strict'

const express = require('express')
const BikeCtrl = require('../controllers/bike')
const StationCtrl = require('../controllers/station')

const api = express.Router()



//POST
api.post('/bike', BikeCtrl.postBike);
api.post('/station', StationCtrl.postStation);
api.post('/stations/addbike', StationCtrl.postStationBike);

//GET
api.get('/bike', BikeCtrl.getBikes);
api.get('/station', StationCtrl.getStations);

//DELETE
api.delete('/bike/delete', BikeCtrl.deleteBike);


module.exports = api