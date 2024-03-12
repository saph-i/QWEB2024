const mongoose = require("mongoose")

const jobSchema = new mongoose.Schema({
  title: String,
  date: String,
  bio: String,
  location: String,
  color: String,
});

const jobModel = mongoose.model("Job", jobSchema);

module.exports = jobModel