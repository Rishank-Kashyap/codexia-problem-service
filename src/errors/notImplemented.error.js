const BaseError = require("./base.error");

class NotImplementedError extends BaseError {
  constructor(methodName) {
    super("Not-implemented-error", 501, `${methodName} Not Implemented !!`, {});
  }
}

module.exports = { NotImplementedError };
