const vehiclesDetails = require("./global");

module.exports.leavevehicle = (req, res) => {
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
};
