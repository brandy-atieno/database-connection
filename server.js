const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 2000;
const messageRoutes=require('./routes/messageRoutes')
const pagesRoutes=require('./routes/pagesRoutes')

//set view engine
app.set("view engine", "ejs");
// load public files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//connect to db
const CONNECTION_URI =process.env.CONNECTION_URI
mongoose.connect(CONNECTION_URI)
.then((result) => {
  console.log('Db connected!');
  app.listen(PORT, (req, res) => {
    console.log(`Server running at port:http://localhost:${PORT}`);
  });
}).catch((error) => {
  console.log(error);
});
app.use(pagesRoutes)
app.use(messageRoutes)