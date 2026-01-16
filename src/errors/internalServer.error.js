const BaseError = require("./base.error");

class InternalServerError extends BaseError {
  constructor(details) {
    super(
      "Internal-server-error",
      500,
      `Something went wrong !!`,
      details
    );
  }
}

module.exports = { InternalServerError };
