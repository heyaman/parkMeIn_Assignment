const { ParkingSpotType, VehicleType } = require("../OOPSDesign/enumType");
const { ParkingLot } = require("../OOPSDesign/ParkingLot");
const { PersonAccount } = require("../OOPSDesign/person");


var parkingLot = new ParkingLot();
exports.parkOut = () => {
  return new Promise((resolve, reject) => {
    //need vehcile number
    if (isAvailable() == false) {
    } else {
      removeVehicle(req.body.vehicleNumber);
      resolve(true);
    }
  });
};
let removeVehicle = (vehicleNumber) => {
  vehicleInfo = getInfoAboutVehicle(vehicleNumber);
  //TypeOfVehicle : consist info about vehicle type,registration ID,presentIndexAt,slotType
  removeHelper(vehicleInfo);
};

let removeHelper = (vehicleInfo) => {
       
        vehicleType =vehicleInfo.vehicleType;
        switch (vehicleType) {
            case VehicleType.CAR: //removeVehicle of Car typ
              
              break;
        
            case VehicleType.MOTORBIKE: //removeVehicle of motorBike typ
              addVehicle_Helper(vehicleType, 0);
              break;
        
            case VehicleType.TRUCK: //removeVehicle of truck typ
              addVehicle_Helper(vehicleType, 61);
              break;
            default:
              console.log("vehicle not found");
          }
    }
