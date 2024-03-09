const express= require('express');
const router=express.Router();
const controller=require('../../Controllers/city-controller');
const flightController=require('../../Controllers/fight-controller');

router.get('/city/:id', controller.Get);
router.get('/cities',controller.getAll);
router.post('/city',controller.Create)
router.delete('/city/:id',controller.Delete);
router.patch('/city/:id',controller.Update)

//flight

router.post('/flight',flightController.Create)





module.exports=router;