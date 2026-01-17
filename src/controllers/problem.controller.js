const { NotImplementedError } = require("../errors/notImplemented.error");
const { ProblemService } = require("../services");
const { ProblemRepository } = require("../repositories");

const problemService = new ProblemService(new ProblemRepository());

function pingProblemController(req, res) {
  return res.json({ message: "Ping check for Problem Controller" });
}

async function addProblem(req, res, next) {
  try {
    console.log("Incoming request body", req.body);
    const newProblem = await problemService.createProblem(req.body);
    return res.status(201).json({
      success: true,
      message: "Successfully created a new problem",
      error: {},
      data: newProblem,
    });
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
