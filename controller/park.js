const vehiclesDetails = require("./global");

const noOfSlots = 10;

module.exports.park = (req, res) => {
  try {
    const { vehicleNo, slotNo } = req.query;
    if (!vehicleNo || !slotNo)
      throw new Error("1001::vehicle number is required");
    if (parseInt(slotNo) > noOfSlots)
      throw new Error("1003::enter the valid slot");
    let vehicleSlot = Object.values(vehiclesDetails);
    console.log(vehicleSlot);
    for (let i = 0; i < vehicleSlot.length; i++) {
      if (parseInt(slotNo) == parseInt(vehicleSlot[i].slotNo)) {
        throw new Error("1003::slot is in use");
      }
    }
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
};
