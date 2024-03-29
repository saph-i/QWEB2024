const jobModel = require("./JobModel")

module.exports = async (req, res) =>{
    const {title}=req.body
    const {bio}=req.body
    const {location}=req.body
    const {expiry} = req.body
    const {link} = req.body
    const job = new jobModel({
        title,
        expiry,
        bio,
        location,
        link,
    })
    const newJob = await job.save();
    res.json(newJob);
}