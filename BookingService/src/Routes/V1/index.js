const express= require('express');
const router=express.Router();
const controller=require('../../controller/bookingController')


router.post('/booking', controller.Create)







module.exports=router;