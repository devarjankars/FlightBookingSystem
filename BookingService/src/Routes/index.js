const express= require('express');
const router=express.Router();

const ApiRoute=require('./V1/index');


router.use('/v1',ApiRoute);





module.exports=router;
