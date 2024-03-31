const mongoose = require("mongoose")

const jobSchema = new mongoose.Schema({
  title: String,
  date: String,
  expiry: String,
  location: String,
  link: String,
  bio: String
});

const jobModel = mongoose.model("Job", jobSchema);

module.exports = jobModel