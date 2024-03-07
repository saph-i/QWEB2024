const EventModel = require("../models/EventModel")

module.exports = async (req,res)=>{
    const {id} = req.params;
    const event = await EventModel.findById(id);
    await event.deleteOne();
    res.status(204).json(event);
}