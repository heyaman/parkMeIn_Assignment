const express = require("express");
const bodyParser = require("body-parser");
const parkingInService = require("./services/parkIn.service");
let app = express();
let ParkIn = require("./routes/api/ParkIn");
const { VehicleType } = require("./OOPSDesign/enumType");

let port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api/park", (req, res) => {
  //   let vehicleType=vehicleType.MotorBike;
  console.log(req.body);
  parkingInService.parkIn(VehicleType.CAR);
  res.json({});
});
//app.use()

app.listen(port, () => {
  console.log("port is running at " + port);
});
