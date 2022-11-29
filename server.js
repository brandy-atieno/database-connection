const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 2000;
const messageRoutes=require('./routes/messageRoutes')
//set view engine
app.set("view engine", "ejs");
// load public files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//connect to db
const CONNECTION_URI = process.env.CONNECTION_URI  
mongoose.connect(CONNECTION_URI)
.then((result) => {
  console.log('Db connected!');
  app.listen(PORT, (req, res) => {
    console.log(`Server running at port:http://localhost:${PORT}`);
  });
}).catch((error) => {
  console.log(error);
});
//index
app.get("/", (req, res) => {
  res.render("index");
});

//about
app.get("/about", (req, res) => {
  res.render("about");
});
//contact
app.get("/contact", (req, res) => {
  res.render("contact");
});
// add contact
app.get('/add',(req,res)=>{
  
  res.render('');
  
})
//db redirect
app.get("/home", (req, res) => {
  res.redirect("/messages");
});
//get messages

//searvices
app.get("/services", (req, res) => {
  res.render("searvices",{title:'Test Service'});
});
//testimonial
app.get("/testimonial", (req, res) => {
  res.render("testimonial");
});
//works
app.get("/works", (req, res) => {
  res.render("works");
});
app.use(messageRoutes)