const express = require("express");



const readEventsRoute = require("./readEventRoute");
const deleteEventsRoute = require("./deleteEventRoute");
const createEventsRoute = require("./createEventRoute");
const router = express.Router();


router.get("/", readEventsRoute);
router.post("/", createEventsRoute)
router.delete("/:id", deleteEventsRoute)

module.exports = router