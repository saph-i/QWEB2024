const mongoose = require("mongoose")

const eventSchema = new mongoose.Schema({
  title: String,
  date: String,
  bio: String,
  location: String,
  color: String,
});

const itemModel = mongoose.model("Event", eventSchema);

module.exports = eventModel