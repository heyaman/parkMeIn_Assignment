const express = require('express');

const vehicleType  = require('../../OOPSDesign/enumType');
const router=express.Router();
const parkingInService=require('../../services/parkIn.service');


router.route('/').post((req,res)=>{
//   let vehicleType=vehicleType.MotorBike;
console.log(req);
    parkingInService.parkIn(vehicleType.VehicleType.CAR);
    res.json({})
})




module.exports=router;