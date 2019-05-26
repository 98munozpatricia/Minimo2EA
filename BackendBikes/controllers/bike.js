'use strict'

const BikeCtrl = {}

const Bike = require('../models/bike')
const Station = require('../models/station')

//Register
BikeCtrl.postBike = async (req, res) => {
    const bike = new Bike(req.body);

    console.log(bike);

    try {
        await bike.save();
        res.status(200).send({message: "Bike created successfully"})
    } catch (err) {
        res.status(500).send(err);
        console.log(err);
    }
 
}
BikeCtrl.deleteBike = async(req, res)=>{
    try{
        const _id = req.body.bikeId;
        console.log(_id);
        let bike = await Bike.findByIdAndRemove(_id);
        if(!bike){
            return res.status(404).send({message: 'Bike not found'})
        }else{
            res.status(200).send({message:'Bike deleted successfully'})
        }
    }catch(err){
        res.status(500).send(err)
    }
}

//Get all bikes
BikeCtrl.getBikes = async(req, res) => {
    const allbikes = await Bike.find()
    res.json(allbikes)
}

module.exports = BikeCtrl
