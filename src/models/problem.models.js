const mongoose = require("mongoose");

const problemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title can't be empty"],
  },
  description: {
    type: String,
    requied: [true, "Description can't be empty"],
  },
  difficulty: {
    type: String,
    enum: ["easy", "medium", "hard"],
    required: [true, "Question's Difficulty can't be empty"],
  },
  testCases: [
    {
      input: {
        type: String,
        required: [true, "Test Case input Can't be empty"],
      },
      output: {
        type: String,
        required: [true, "Test Case output can't be empty"],
      },
    },
  ],
  editorial: {
    type: String,
  },
});

const Problem = mongoose.model("Problem", problemSchema);

/*
mongoose.model("Problem", problemSchema) creates and registers a Mongoose model that represents the problems collection in MongoDB.

Collection name rule:
Model name → lowercase + plural
So:
Model Name	MongoDB Collection
"Problem"	problems

const Problem 
You use Problem everywhere to query MongoDB
It contains all MongoDB operations
*/

module.exports = Problem;
