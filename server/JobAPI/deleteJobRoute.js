const JobModel = require("./JobModel")

module.exports = async (req,res)=>{
    const {id} = req.params;
    const job = await JobModel.findById(id);
    await job.deleteOne();
    res.status(204).json(job);
}