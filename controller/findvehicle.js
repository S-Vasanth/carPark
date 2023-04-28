const vehiclesDetails = require("./global");

module.exports.findvehicle = (req, res) => {
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
};
