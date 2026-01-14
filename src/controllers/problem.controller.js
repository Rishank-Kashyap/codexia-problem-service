function pingProblemController(req, res) {
  return res.json({ message: "Ping check for Problem Controller" });
}

function addProblem(req, res) {}

function getProblem(req, res) {}

function getProblems(req, res) {}

function updateProblem(req, res) {}

function deleteProblem(req, res) {}

module.exports = {
  pingProblemController,
  addProblem,
  getProblem,
  getProblems,
  updateProblem,
  deleteProblem,
};
