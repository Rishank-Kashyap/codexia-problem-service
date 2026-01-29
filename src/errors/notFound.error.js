const BaseError = require("./base.error");

class NotFound extends BaseError {
  constructor(resourceName, resourceValue) {
    super(
      "Not-found-error",
      404,
      `The requested resource ${resourceName} not found`,
      { resourceName, resourceValue }
    );
  }
}

module.exports = NotFound;
