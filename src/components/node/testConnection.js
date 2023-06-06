const mongoose = require("mongoose");

//connect to mogodb

mongoose.connect('mongodb://localhost/testaroo');

mongoose.connection.once('open',()=>{
    console.log("connection has been madem now ");
}).on('error',(err)=>{
    console.log("connection error",err)
});