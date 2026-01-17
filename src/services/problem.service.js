const { markdownSanitizer } = require("../utils");

class ProblemService {
  constructor(problemRepository) {
    this.problemRepository = problemRepository;
  }

  async createProblem(problemData) {
    try {
      console.log("Problem Data", problemData);
      // 1. sanitize the markdown for description
      problemData.description = markdownSanitizer(problemData.description);

      const problem = await this.problemRepository.createProblem(problemData);
      console.log("Problem created", problem);

      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = ProblemService;
