const JobModel = require("./JobModel")

module.exports = async (req,res)=>{
    const jobs = await JobModel.find();
    res.json(jobs);
}
