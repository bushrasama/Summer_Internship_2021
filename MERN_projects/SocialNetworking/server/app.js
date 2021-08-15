const express = require("express");
const app = express()
const mongoose = require("mongoose");
const PORT = 5000
const {MONGOURI} = require("./valuekeys.js")
const cors = require('cors');
app.use(cors());

mongoose.connect("mongodb+srv://bushra:bumongodb@cluster0.2wk1e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
{useNewUrlParser: true,
useUnifiedTopology: true
});
mongoose.connection.on('connected',()=>{
    console.log("connected to server");
})

mongoose.connection.on('error',()=>{
    console.log("connection error");
})

require("./models/user");
require("./models/post");

app.use(express.json())
app.use(require('./routes/authen'))
app.use(require('./routes/post'))
app.use(require('./routes/user'))
//bumongodb : password for mongodb

app.listen(PORT,()=>{
    console.log("Server is running at ", PORT);
})