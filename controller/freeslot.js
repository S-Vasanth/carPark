const vehiclesDetails = require("./global");

const noOfSlots = 10;

module.exports.freeslot = (req, res) => {
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
};
