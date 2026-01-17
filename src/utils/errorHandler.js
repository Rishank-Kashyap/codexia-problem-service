const BaseError = require("../errors/base.error");

function errorHandler(err, req, res, next) {
  if (err instanceof BaseError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      error: err.details,
      data: {},
    });
  }

  return res.status(500).json({
    success: false,
    message: "Something Went Wrong",
    error: err,
    data: {},
  });
}

module.exports = errorHandler;
