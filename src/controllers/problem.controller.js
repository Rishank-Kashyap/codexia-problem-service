const { BadRequest } = require("../errors/badrequest.error");
const { NotImplementedError } = require("../errors/notImplemented.error");

function pingProblemController(req, res) {
  return res.json({ message: "Ping check for Problem Controller" });
}

function addProblem(req, res, next) {
  try {
    throw new BadRequest("Property Name", { missing: ["Property Name"] });
  } catch (error) {
    next(error);
  }
}

function getProblem(req, res) {
  try {
    throw new BadRequest("Property Name", { missing: ["Property Name"] });
  } catch (error) {
    next(error);
  }
}

function getProblems(req, res) {
  try {
    throw new BadRequest("Property Name", { missing: ["Property Name"] });
  } catch (error) {
    next(error);
  }
}

function updateProblem(req, res) {
  try {
    throw new BadRequest("Property Name", { missing: ["Property Name"] });
  } catch (error) {
    next(error);
  }
}

function deleteProblem(req, res) {
  try {
    throw new BadRequest("Property Name", { missing: ["Property Name"] });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  pingProblemController,
  addProblem,
  getProblem,
  getProblems,
  updateProblem,
  deleteProblem,
};
