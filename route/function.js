const express = require("express");

const router = express.Router();
const vehiclesDetails = {};
const parkDetails = [];
const logger = console;

const noOfSlots = 10;

router.get("/", (req, res) => {
  res.json(vehiclesDetails);
});

router.post("/park", (req, res) => {
  try {
    const { vehicleNo, slotNo } = req.query;
    if (!vehicleNo || !slotNo)
      throw new Error("1001::vehicle number is required");
    if (parseInt(slotNo) > noOfSlots)
      throw new Error("1003::enter the valid slot");
    vehiclesDetails[vehicleNo] = {
      slotNo: slotNo,
    };
    res.status(200).json({
      msg: vehiclesDetails,
      status: "success",
    });
  } catch (error) {
    throw error;
  }

  console.log(vehiclesDetails);
});

router.get("/findvehicle", (req, res) => {
  try {
    const { vehicleNo } = req.query;
    console.log(vehicleNo);
    if (!vehicleNo) throw new Error("1001::vehicle number is required");
    if (!(vehicleNo in vehiclesDetails))
      throw new Error("1002::vehicle is not parked");

    res.status(200).json({
      msg: {
        slotNo: vehiclesDetails[vehicleNo].slotNo,
      },
      status: "success",
    });

    console.log(vehiclesDetails[vehicleNo].slotNo);
  } catch (error) {
    throw error;
  }
});

router.post("/leavevehicle", (req, res) => {
  const { vehicleNo } = req.query;
  console.log(vehicleNo);

  if (!vehicleNo) throw new Error("1004::Pls Provide the Vehicle Number");
  if (!(vehicleNo in vehiclesDetails))
    throw new Error("1005::There is no Vehicle placed");

  delete vehiclesDetails[vehicleNo];

  res.status(200).json({
    msg: vehiclesDetails,
    status: "success",
  });
});

router.get("/freeslots", (req, res) => {
  const vehicleKeys = Object.values(vehiclesDetails);
  const arr = [];
  for (let i = 0; i < vehicleKeys.length; i++) {
    let slots = parseInt(vehicleKeys[i].slotNo);
    arr.push(slots); //9,8
  }

  const noFreeSlot = [];
  for (let j = 1; j <= noOfSlots; j++) {
    if (arr.indexOf(j) == -1) {
      noFreeSlot.push(j);
    }
  }

  res.status(200).json({
    msg: noFreeSlot,
    status: "success",
  });
});

module.exports = router;
