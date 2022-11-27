const mongoose = require("mongoose");
const Schema= mongoose.Schema;
const messagesSchema= new Schema({
   name:{
    type:String,
    required:true
   },
   email:{
    type:String,
    required:true
   },
   phone:{
    type:Number,
    required:true
   },
   message:{
    type:String,
    required:true
   } ,
   
},{timestamps:true})
const Message = mongoose.model('Messages',messagesSchema)
module.exports=Message