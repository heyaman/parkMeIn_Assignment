const express = require('express');
const bodyParser=require('body-parser');
const vehicleType  = require('../../OOPSDesign/enumType');
const router=express.Router();
const parkingOutService=require('../../services/parkeOut.service');

router.get('/',(req,res)=>{
    let vehicleNumber='12345';
  
    parkingOutService.parkOut(vehicleNumber);
   
  })
  


module.exports=router;