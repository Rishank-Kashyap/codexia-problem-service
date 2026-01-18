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
}

module.exports = ProblemRepository;
