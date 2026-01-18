const { markdownSanitizer } = require("../utils");

class ProblemService {
  constructor(problemRepository) {
    this.problemRepository = problemRepository;
  }

  async createProblem(problemData) {
    // 1. sanitize the markdown for description
    problemData.description = markdownSanitizer(problemData.description);

    const problem = await this.problemRepository.createProblem(problemData);

    return problem;
  }

  async getAllProblems() {
    const problems = await this.problemRepository.getAllProblems();
    return problems;
  }

  async getProblem(problemId) {
    const problem = await this.problemRepository.getProblem(problemId);
    return problem;
  }

  async updateProblem(problemId, updateBody) {
    const problem = await this.problemRepository.updateProblem(
      problemId,
      updateBody
    );
    return problem;
  }

  async deleteProblem(problemId) {
    const deletedProblem = await this.problemRepository.deleteProblem(
      problemId
    );
    return deletedProblem;
  }
}

module.exports = ProblemService;
