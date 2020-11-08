const VehicleType={
    MOTORBIKE:1,
    CAR:2,
    TRUCK:3,
}

const ParkingSpotType={
    MOTORBIKE:1,
    COMPACT:2,
    LARGE:3,
}
Object.freeze(VehicleType);
Object.freeze(ParkingSpotType)

module.exports.VehicleType=VehicleType;
module.exports.ParkingSpotType=ParkingSpotType;