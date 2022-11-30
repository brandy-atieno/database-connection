const router=require('express').Router()
const{index,getAbout,getContact,getTestimonial,getWorks,getSearvices,getHome,getPageNotFound,getDetails}=require('../controllers/pagesControllers')
//get messages
router.get('/',index)
router.get('/about',getAbout)
router.get('/contact',getContact)
router.get('/testimonial',getTestimonial)
router.delete('/works',getWorks)
router.get('/searvices',getSearvices)
router.get('/home',getHome)
router.get('/404',getPageNotFound)
router.get('/details',getDetails)









module.exports= router