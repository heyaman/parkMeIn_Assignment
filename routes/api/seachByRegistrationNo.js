const getSearchService=require('../../services/getSearchService')
const express = require('express');

const vehicleType  = require('../../OOPSDesign/enumType');
const router=express.Router();

router.route('/search').post((req,res)=>{
    //   let vehicleType=vehicleType.MotorBike;
    console.log(req);
    searchByRegistrationNo(req.body.registrationNumber);
        res.json({})
    })
    
    
    
    
module.exports=router;