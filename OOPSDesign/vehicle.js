let VehicleType=require('./enumType');
let Type=VehicleType.VehicleType;

class Vehicle{
    liscenceNumber ="xyz"
    vehicleNumber="smthngXYZ"
    constructor(Type){
        this.Type=Type;
    }
    
}

class Car extends Vehicle{
    constructor(){
        super(Type.CAR)
    }
}
class MotorBike extends Vehicle{
    constructor(){
        super(Type.MOTORBIKE)
    }
}
class Truck extends Vehicle{
    constructor(){
        super(Type.TRUCK)
    }
}

module.exports.Car=Car;
module.exports.MotorBike=MotorBike;
module.exports.Truck=Truck;