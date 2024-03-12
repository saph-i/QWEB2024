const express = require("express");
const dotenv = require("dotenv")
const cors = require("cors");
const router = require("./router")
const mongoose = require("mongoose");
dotenv.config();
const app = express();

app.use(express.json())
app.use(cors());

console.log(process.env.MONGO_URI)

app.use(router);
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("mongoose is working, listening on port 3001")
})


app.listen(3001);
