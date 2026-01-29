const BaseError = require("./base.error");

class BadRequest extends BaseError {
  constructor(propertyName, details) {
    super(
      "Bad-request-error",
      400,
      `Invalid structure for ${propertyName} provided`,
      details
    );
  }
}

module.exports = BadRequest;
