const EventModel = require("../models/EventModel")

module.exports = async (req,res)=>{
    const events = await EventModel.find();
    res.json(events);
}
