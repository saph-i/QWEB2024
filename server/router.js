const express = require("express");


const router = express.Router();

const readEventsRoute = require("./readEventsRoute")
const deleteEventsRoute = require("./deleteEventsRoute");
const createEventsRoute = require("./createEventsRoute")

router.get("/", readEventsRoute);
router.post("/", createEventsRoute)
router.delete("/:id", deleteEventsRoute)

module.exports = router