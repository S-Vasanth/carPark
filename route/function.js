const express = require("express");

const router = express.Router();

const parkController = require("./../controller/park");

const leavevehicleController = require("./../controller/leavevehicle");

const freeslotController = require("./../controller/freeslot");

const findvehicleController = require("./../controller/findvehicle");

const parkDetailsController = require("./../controller/parkdetails");

// router.get("/", (req, res) => {
//   res.json(vehiclesDetails);
// });

router.get("/parkdetails", parkDetailsController.parkinfo);

router.post("/park", parkController.park);

router.post("/leavevehicle", leavevehicleController.leavevehicle);

router.get("/freeslot", freeslotController.freeslot);

router.get("/findvehicle", findvehicleController.findvehicle);

module.exports = router;
