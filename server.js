//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const https = require("https");
const upload = require('express-fileupload');


const app = express();
const mongoose = require("mongoose");


app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(upload());


mongoose.connect("mongodb://localhost:27017/regDB", {
  useNewUrlParser: true
});
const itemsSchema = {
  fname: String,
  lname: String,
  contact: Number,
  email: String,
  category: String,
  ticket: Number,
  pic: String,
  regno: Number
};
const Item = mongoose.model("Item", itemsSchema);

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.get("/reg.html", function(req, res) {
  res.sendFile(__dirname + "/reg.html");
});
app.get("/preview", function(req, res) {
  res.sendFile(__dirname + "/connect.html");
});

app.get("/finish", function(req, res) {
  res.sendFile(__dirname + "/finish.html");
});


//Reg Page
app.post("/reg.html", function(req, res) {

  if (req.files) {
    var file = req.files.file;
    var filename = file.name;
    console.log(filename);
    file.mv('./public/uploads/' + filename, function(err) {
      if (err) {
        console.log("Err");
      } else {
        console.log("File Uploaded");
      }
    });
  }
  res.redirect("/preview");
});



// Preview Page

app.post("/preview", function(req, res) {

  const fname = req.body.fname;
  const lname = req.body.lname;
  const contact = req.body.phno;
  const email = req.body.email;
  const category = req.body.category;
  const ticket = req.body.ticket;
  const uid = req.body.uid;
  const imgs = req.body.imgs;

  const list = new Item({
    fname: fname,
    lname: lname,
    contact: contact,
    email: email,
    category: category,
    ticket: ticket,
    pic: imgs,
    regno: uid
  });
  list.save();
  res.redirect("/finish");

});



//Listen to port 3000

app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});
