const express= require('express');
const router=express.Router();
const controller=require('../../Controllers/city-controller');


router.get('/city/:id', controller.Get);
router.get('/cities',controller.getAll);
router.post('/city',controller.Create)
router.delete('/city/:id',controller.Delete);
router.patch('/city/:id',controller.Update)





module.exports=router;