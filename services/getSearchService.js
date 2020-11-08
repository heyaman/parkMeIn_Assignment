const { ParkingSpotType, VehicleType } = require("../OOPSDesign/enumType");
const { ParkingLot } = require("../OOPSDesign/ParkingLot");
const { PersonAccount } = require("../OOPSDesign/person");

var parkingLot = new ParkingLot();
exports.searchByRegistrationNo=(registrationNo)=>{

    return new Promise((req,res)=>{
        if(!foundRegistered(registrationNo)){
            //user not found
            return 'no Vehicle Found by provided registrationNumber';
        }else{
            return parkingLot.attendentInfo;
            

        }
    })

}
let foundRegistered=(registrationNo)=>{//search into Set by registration number
    return parkingLot.currentAttendent.has(registrationNo);
}
