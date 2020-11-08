const { ParkingSpotType, VehicleType } = require("./enumType");
const { PersonAccount } = require("./person");

class ParkingLot{
    name="Park_Me";
    location="Noida";
    maxSize=100;// for single floor
    levelCount=3;//totlal floors

    priceList={motorBike:10,//pricing for parking
    car:20,
    truck:40};

    parkingSlotType = ParkingSpotType

    currentAttendent=new Set();//to store current attendnent
    compactSpotCount=30;
    largeSpotCount=20;
    motorBikeSpotCount=50;
    bikeStartIndex=0;
    carStartIndex=31;
    truckStartIndex=61;
//considered 2D array form of parking lot number of row is considerd as level
//at each row 100 spot are there from 0 to 30 spot empty for motorbike i.e motorbikeSpot
//from 31 to 61 spot are there from 31 to 61 sport empty for car parking,bike parkign i.e compactSpot
//from 61 to 100 parking for bike,car,bus i.e large spot

    vehicleCount={//to get current count of the all type of vehcile in local storage
        car:0,
        motorBike:0,
        truck:0,

        
    }

    slotInfo={
        vehicleType:null,
        isOccupied:false,
        personInfo:PersonAccount,
        slotType:null
    }
    attendentInfo={
        registrationNo:{
            vehcileType:null,
            inParking:false,
            vehicleId:null,
            parkedTime:null,
            
        }

    }
    parking =[];

}
module.exports.ParkingLot=ParkingLot;