const EventModel = require("./EventModel")

module.exports = async (req,res)=>{
    const events = await EventModel.find();
    res.json(events);
}
