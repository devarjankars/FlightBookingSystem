const express= require('express');
const router=express.Router();
const apiV1=require('./routes/V1/index');

router.use('/v1',apiV1)

module.exports=router;