const express= require('express');
const router=express.Router();
const controller=require('../../Controllers/city-controller');
const flightController=require('../../Controllers/fight-controller');
const airpotController= require('../../Controllers/airpot-service');

router.get('/city/:id', controller.Get);
router.get('/cities',controller.getAll);
router.post('/city',controller.Create)
router.delete('/city/:id',controller.Delete);
router.patch('/city/:id',controller.Update)

//flight

router.post('/flight',flightController.Create);

router.get('/flights',flightController.getAll)

//Airpot

router.get('/airports',airpotController.getAll);
router.get('/airport/:id',airpotController.Get);
router.post('/airport',airpotController.Create);
router.patch('/airport/:id',airpotController.Update);
router.delete('/airport/:id',airpotController.Delete);






module.exports=router;