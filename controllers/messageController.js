const Message=require('../models/messages')
module.exports={
getMessages:((req,res)=>{
    Message.find().sort({createdAt:-1})
    .then(result=>res.render('home',{message:result}))
    .catch(error=>console.log(error));
  }),
getMessage:((req,res)=>{
    Message.findById( "63836b7bfb2ea289e86715f2")
    .then(result=>res.send(result))
    .catch(error=>console.log(error));
  }),
postMessage:((req, res) => {
  const message= new Message(req.body)
  message.save()
  .then((result)=>{
    res.send(result)
  })
  .catch((error)=>{
    console.log(error);
  })}),
  getById:((req,res)=>{
    const id = req.params.id
    Message.findById(id)
    .then((result)=>{
res.render('details',{message:result})
    })
    .catch((error)=>{
      res.render('404');
    })
  }),
  delById:((req,res)=>{
    const id = req.params.id
    Message.findByIdAndDelete(id)
    .then((result)=>{
res.json({redirect:'/messages'})
    })
    .catch((error)=>{
      console.log(error);
    })
  })
 }