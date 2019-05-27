'use strict'


const mongoose = require('mongoose');
const Station = require('../models/station')
const Bike = require('../models/bike');
const StationCtrl = {}


//Post station
StationCtrl.postStation = async (req, res) => {
    const station = new Station(req.body);

    console.log(station);

    try {
        await station.save();
        res.status(200).send({message: "Station created successfully"})
    } catch (err) {
        res.status(500).send(err);
        console.log(err);
    }
 
}


//Get all stations
StationCtrl.getStations = async(req, res) => {
    const allstations = await Station.find()
    res.json(allstations)
}

StationCtrl.postStationBike= async(req, res)=> {
    try{
        const bikeId = req.body.bikeId;
        const stationId = req.body.stationId;

        console.log(`bikeID: ${bikeId}, stationID: ${stationId}`);

        let bikeFound = await Bike.findById(bikeId);

        if (!bikeFound) {
            return res.status(404).send({message: 'Bike not found'})
        } else {
            let stationUpdated = await Station.findByIdAndUpdate({_id: stationId}, {$addToSet: {bikes: bikeId}});
            await Bike.findByIdAndUpdate({_id: bikeId}, {$set: {status: true}});
            if (!stationUpdated) {
                return res.status(404).send({message: 'Station not found'})
            }
        }

        res.status(200).send({message: "Bike added successfully to the station"})
    } catch(err) {
        if (err.name === 'MongoError' && err.code === 11000) {
            res.status(409).send({err: err.message, code: err.code})
        }
        res.status(500).send(err)
    }



}
module.exports = StationCtrl
