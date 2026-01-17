const { NotImplementedError } = require("../errors/notImplemented.error");

function pingProblemController(req, res) {
  return res.json({ message: "Ping check for Problem Controller" });
}

function addProblem(req, res, next) {
  try {
    throw new NotImplementedError("Add Problem");
  } catch (error) {
    next(error);
  }
}

function getProblem(req, res) {
  try {
    throw new NotImplementedError("Get Problem");
  } catch (error) {
    next(error);
  }
}

function getProblems(req, res) {
  try {
    throw new NotImplementedError("Get all Problems");
  } catch (error) {
    next(error);
  }
}

function updateProblem(req, res) {
  try {
    throw new NotImplementedError("Update Problems");
  } catch (error) {
    next(error);
  }
}

function deleteProblem(req, res) {
  try {
    throw new NotImplementedError("Delete Problems");
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
