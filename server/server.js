const express = require("express");


const router = express.Router();

const readEventsRoute = require("./routes/readEventsRoute")
const deleteEventsRoute = require("./routes/deleteEventsRoute");
const createEventsRoute = require("./routes/createEventsRoute")

router.get("/", readEventsRoute);
router.post("/", createEventsRoute)
router.delete("/:id", deleteEventsRoute)

module.exports = router