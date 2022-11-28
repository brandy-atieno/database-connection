const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 2000;
const Message=require('./models/messages')
//set view engine
app.set("view engine", "ejs");
// load public files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//connect to db
const CONNECTION_URI =  prcess.env.CONNECTION_URI
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
  const message= new Message({
    name:'Ruth Nyambo',
    email:'nyambok@gmail.com',
    phone:726274789,
    message:'Favourite Human' 

  })
  message.save()
  .then((result)=>{
    res.send(result)
  })
  .catch((error)=>{
    console.log(error);
  })
})
//db redirect
app.get("/home", (req, res) => {
  res.redirect("/messages");
});
//get messages
app.get('/messages',(req,res)=>{
  Message.find().sort({createdAt:-1})
  .then(result=>res.render('home',{message:result}))
  .catch(error=>console.log(error));
})
//get single message
app.get('/message',(req,res)=>{
  Message.findById( "63836b7bfb2ea289e86715f2")
  .then(result=>res.send(result))
  .catch(error=>console.log(error));
})

app.post("/contact", (req, res) => {
  // res.render('contact')
  const data = req.body;
console.log('data entered:',data)
  res.end();
});
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
