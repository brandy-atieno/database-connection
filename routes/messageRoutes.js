const router=require('express').Router()
const{getMessages,getMessage,postMessage,getById,delById}=require('../controllers/messageController')
//get messages
router.get('/messages',getMessages)
//get single message
router.get('/message',getMessage)
router.post('/contact',postMessage)
router.get('/message/:id',getById)
router.delete('/message/:id',delById)




module.exports= router