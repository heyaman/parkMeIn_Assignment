const { localStorage } = require("../localStorage");
const { ParkingSpotType, VehicleType } = require("../OOPSDesign/enumType");
const { ParkingLot } = require("../OOPSDesign/ParkingLot");
const { PersonAccount } = require("../OOPSDesign/person");

var parkingLot = new ParkingLot();

let storage=localStorage;
exports.parkIn = (vehcileType) => {
  return new Promise((resolve, reject) => {
    if (isOccuied()) {
        return 'Parking Full';
    } else {
      //approve parking
      addVehicle(vehcileType);
      resolve(true);
    }
  });
};

let isOccuied = function (VehcileType) {
    if(JSON.parse(storage.getItem('parkingData').length == parkingLot.maxSize)) {
        return true;
    } else {
        return false;
    }
};

let avaibleCount = function () {
  //return typ int
};

let addVehicle = (vehicleType) => {
    console.log(vehicleType);
    const startingIndex = getAvailableParkingIndex(vehicleType);
  switch (vehicleType) {
    case VehicleType.CAR: //add method some method
      addVehicle_Helper(vehicleType, 31);

      break;

    case VehicleType.MOTORBIKE: //add method forsome method
      addVehicle_Helper(vehicleType, 0);
      break;

    case VehicleType.TRUCK: //add method for truck
      addVehicle_Helper(vehicleType, 61);
      break;
    default:
      console.log("vehicle not found");
  }
};
let addVehicle_Helper = (vehicleTyp, startIndex) => {
  let parking = [];
  for (let ind = startIndex; ind < 100; ind++) {
    if (parking && parking[ind] != null) continue;
    //add logic
    let slotInfo = parkingLot.slotInfo;
    slotInfo.vehicleTyp = vehicleTyp;
    slotInfo.isOccupied = true;
    slotInfo.personInfo = new PersonAccount(
      "aman",
      "tripathiaman2997@gmail.com",
      88515,
      12314565
    );
    // slotInfo.slotType= vehicleTyp == VehicleType.MOTORBIKE || vehicleTyp == VehicleType.COMPACT ?
    // ind>startIndex? ParkingSpotType.LARGE : ParkingSpotType.COMPACT : ParkingSpotType.LARGE;

    if (vehicleTyp == VehicleType.MOTORBIKE) {
        parkingLot.vehicleCount.motorBike+=1;
      //just for MotorBike
      if (ind < 31) {
        slotInfo.slotType = ParkingSpotType.MOTORBIKE;
      } else if (ind >= 31 && ind < 61) {
        slotInfo.slotType = ParkingSpotType.COMPACT;
      } else {
        slotInfo.slotType = ParkingSpotType.LARGE;
      }
      parking[ind].push(slotInfo);

    } else if (vehicleTyp == VehicleType.CAR) {
      //just for CAR
      parkingLot.vehicleCount.car+=1;
      if(ind >= 31) {
        if (ind >= 31 && ind < 61) {
            slotInfo.slotType = ParkingSpotType.COMPACT;
          } else {
            slotInfo.slotType = ParkingSpotType.LARGE;
          }
          let obj = {
              slotNo: ind,
              slotData: slotInfo
          }
          parking.push(obj);
          break;
      }
    } else {
      //for Truck
      parkingLot.vehicleCount.truck+=1;
      for (let i = startIndex; i < startIndex + 5; i++) {
        let obj = {
            slotNo: i,
            slotData: slotInfo
        }
        parking.push(obj);
      }
      slotInfo.slotType = ParkingSpotType.LARGE;
      break;
    }
  }
  storage.setItem('parkingData',JSON.stringify(parking));
};

const getAvailableParkingIndex = (vehicleType) => {
  
    let parkingData = JSON.parse(storage.getItem('parkingData'));
    const occupiedData = parkingData.filter(item => item.slotData.vehicleTyp == vehicleType);

    console.log(occupiedData);

}