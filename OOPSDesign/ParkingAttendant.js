let Person=require('./person');
let PersonAccount=Person.PersonAccount;

class ParkingAttendant extends PersonAccount{
    
   constructor(){
    super(userName,email,phone,adharId); 
   }

   getRegistrationNumber=function(){
    //return string type
}



}
module.exports.ParkingAttendant=ParkingAttendant;