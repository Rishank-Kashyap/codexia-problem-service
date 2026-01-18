const NotImplementedError = require("../errors/notImplemented.error");
const { ProblemService } = require("../services");
const { ProblemRepository } = require("../repositories");

const problemService = new ProblemService(new ProblemRepository());

function pingProblemController(req, res) {
  return res.json({ message: "Ping check for Problem Controller" });
}

async function addProblem(req, res, next) {
  try {
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

async function getProblem(req, res, next) {
  try {
    const response = await problemService.getProblem(req.params.id);
    return res.status(200).json({
      success: true,
      message: `Successfully Fetched problem`,
      error: {},
      data: response,
    });
  } catch (error) {
    next(error);
  }
}

async function getProblems(req, res, next) {
  try {
    const response = await problemService.getAllProblems();
    return res.status(200).json({
      success: true,
      message: "Fetched all the Problems",
      error: {},
      data: response,
    });
  } catch (error) {
    next(error);
  }
}

function updateProblem(req, res, next) {
  try {
    throw new NotImplementedError("Update Problems");
  } catch (error) {
    next(error);
  }
}

function deleteProblem(req, res, next) {
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
