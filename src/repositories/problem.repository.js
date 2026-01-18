const logger = require("../config/logger.config");
const NotFound = require("../errors/notFound.error");
const { Problem } = require("../models");

class ProblemRepository {
  async createProblem(problemData) {
    try {
      const problem = await Problem.create({
        title: problemData.title,
        description: problemData.description,
        difficulty: problemData.difficulty,
        testCases: problemData.testCases ? problemData.testCases : [],
      });

      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getAllProblems() {
    try {
      const problems = await Problem.find({});
      console.log("problems", problems);
      if (problems.length == 0) {
        throw new NotFound("Problems", "");
      }
      return problems;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getProblem(problemId) {
    try {
      const problem = await Problem.findById(problemId);

      if (!problem) {
        throw new NotFound("Problem", problemId);
      }

      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async updateProblem(problemId, updateBody) {
    try {
      const allowedFields = [
        "title",
        "description",
        "difficulty",
        "testCases",
        "editorial",
      ];

      const filteredUpdates = {};

      for (const key of allowedFields) {
        if (updateBody[key] !== undefined)
          filteredUpdates[key] = updateBody[key];
      }

      //   const problem = await Problem.findByIdAndUpdate(problemId);

      //   if (!problem) {
      //     throw new NotFound("Problem", problemId);
      //   }

      //   Object.keys(filteredUpdates).forEach((key) => {
      //     problem[key] = filteredUpdates[key];
      //   });

      //   await problem.save();
      //   return problem;

      // in the above implementation there are two db calls one to fetch and the other one to save but i the below code there is only one db call i.e. to fetch and update the db at once

      // Problem.findByIdAndUpdate(problemId, …) :- Finds the document by _id.
      // { $set: filteredUpdates } :- Only updates the fields present in updateBody, All other fields in the document remain unchanged.
      // { new: true } :- Returns the updated document after changes.
      // { runValidators: true } :- Ensures schema rules (like required, enum) are checked for updated fields.

      const problem = await Problem.findByIdAndUpdate(
        problemId,
        { $set: filteredUpdates },
        { new: true, runValidators: true }
      );

      if (!problem) {
        throw new NotFound("Problem", problemId);
      }

      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async deleteProblem(problemId) {
    try {
      const deletedProblem = await Problem.findByIdAndDelete(problemId);

      if (!deletedProblem) {
        logger.error(`Problem with id: ${problemId} not found in the db`);
        throw new NotFound("problem", problemId);
      }

      return deletedProblem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = ProblemRepository;
