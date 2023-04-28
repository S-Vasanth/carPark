const vehiclesDetails = require("./global");

module.exports.parkinfo = (req, res) => {
  res.status(200).json({
    msg: vehiclesDetails,
    status: "success",
  });
};
