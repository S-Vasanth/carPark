const express = require("express");

const dotenv = require("dotenv");
dotenv.config({});

const app = express();

const logger = console;

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/carparking", require("./route/function"));

app.listen(process.env.PORT, () => {
  console.log(`server listen at port ${process.env.PORT}`);
});

app.use((err, req, res, next) => {
  if (err) {
    logger.error(err);
    let errorMsg = err.message.split("::");
    let statusCode = 500,
      msg = err.message,
      code;
    if (errorMsg.length > 1) {
      statusCode = 200;
      msg = errorMsg[1];
      code = errorMsg[0];
    }
    res.status(statusCode).json({
      msg,
      status: "error",
      code,
    });
  }
});
