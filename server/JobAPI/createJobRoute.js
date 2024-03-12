const jobModel = require("./JobModel")

module.exports = async (req, res) =>{
    const {title}=req.body
    const {bio}=req.body
    const {location}=req.body
    const {date} = req.body
    const {color} = req.body
    const job = new jobModel({
        title,
        date,
        bio,
        location,
        color,
    })
    const newJob = await job.save();
    res.json(newJob);
}