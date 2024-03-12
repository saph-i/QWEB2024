const express = require("express");
const dotenv = require("dotenv")
const cors = require("cors");
const router = require("./router")
const mongoose = require("mongoose");
dotenv.config();
const app = express();

app.use(express.json())
app.use(cors());

app.use(router);
mongoose.connect("mongodb+srv://saulwolkove:DancingStar2023$@cluster0.ln3wquy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("mongoose is working, listening on port 3001")
})


app.listen(3001);
