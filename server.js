//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const https = require("https");
const upload = require('express-fileupload');


const app = express();
const mongoose= require("mongoose");



app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(upload());


mongoose.connect("mongodb://localhost:27017/regDB", {useNewUrlParser: true});
const itemsSchema = {
    fname : String,
    lname : String,
    contact : Number,
    email: String,
    pic: String
};
const Item = mongoose.model("Item", itemsSchema);

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.get("/reg.html", function(req, res){
  res.sendFile(__dirname +"/reg.html");
});
app.get("/finish", function(req,res){
  res.sendFile(__dirname + "/finish.html");
});
app.post("/reg.html", function(req,res){
    const fname = req.body.fname;
    const lname = req.body.lname;
    const contact = req.body.phno;
    const email = req.body.email;
    const pic = req.body.pic;

    if(req.files){

      var file=req.files.file;
      var filename= file.name;
      console.log(filename);
      file.mv('./uploads/'+filename, function (err){
        if(err){
          console.log("Err");
        }
        else {
          
          console.log("File Uploaded");
        }
      });
    }

    const list = new Item({
      fname: fname,
      lname: lname,
      contact: contact,
      email: email,
      pic: pic
    });
    list.save();
    res.sendFile(__dirname + "/connect.html");
});



app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});
