const NotImplementedError = require("../errors/notImplemented.error");
const { ProblemService } = require("../services");
const { ProblemRepository } = require("../repositories");
const BadRequest = require("../errors/badrequest.error");

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
    const getProblem = await problemService.getProblem(req.params.id);
    return res.status(200).json({
      success: true,
      message: `Successfully Fetched problem`,
      error: {},
      data: getProblem,
    });
  } catch (error) {
    next(error);
  }
}

async function getProblems(req, res, next) {
  try {
    const getAllProblems = await problemService.getAllProblems();
    return res.status(200).json({
      success: true,
      message: "Fetched all the Problems",
      error: {},
      data: getAllProblems,
    });
  } catch (error) {
    next(error);
  }
}

async function updateProblem(req, res, next) {
  const allowedFields = [
    "title",
    "description",
    "difficulty",
    "testCases",
    "editorial",
  ];

  // 1. Check if body exists and is not empty
  if (!req.body || Object.keys(req.body).length == 0) {
    throw new BadRequest("Update Problem", { missing: allowedFields });
  }

  // 2. check if at least one allowed field is provided
  const providedFields = Object.keys(req.body);
  const validFields = providedFields.filter((field) =>
    allowedFields.includes(field)
  );

  if (validFields.length === 0) {
    throw new BadRequest("Update Problem", { missing: allowedFields });
  }

  // 3. Calling service with original req.body
  try {
    const updatedProblem = await problemService.updateProblem(
      req.params.id,
      req.body
    );
    return res.status(200).json({
      success: true,
      message: `Successfully Updated the Problem: ${updatedProblem.title}`,
      error: {},
      data: updatedProblem,
    });
  } catch (error) {
    next(error);
  }
}

async function deleteProblem(req, res, next) {
  try {
    const deletedProblem = await problemService.deleteProblem(req.params.id);
    return res.status(200).json({
      success: true,
      message: `Successfully deleted the Problem: ${deletedProblem.title}`,
      error: {},
      data: deletedProblem,
    });
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
