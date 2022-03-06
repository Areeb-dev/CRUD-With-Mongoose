const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/CRUD");
const userRoutes = require("./routes/userRoutes");


app.use(express.json());

//Crud route 
app.use("/", userRoutes);


app.listen(3000);
