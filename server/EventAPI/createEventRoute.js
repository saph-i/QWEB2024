const itemModel = require("./EventModel")

module.exports = async (req, res) =>{
    const {title}=req.body
    const {bio}=req.body
    const {location}=req.body
    const {date} = req.body
    const {color} = req.body
    const event = new itemModel({
        title,
        date,
        bio,
        location,
        color,
    })
    const newEvent = await event.save();
    res.json(newEvent);
}