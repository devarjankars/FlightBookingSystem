const express= require('express');
const router=express.Router();

const userController= require('../../Controller/user-controller')
const middllware= require('../../Middleware/validation')

router.post('/signup',middllware.signupValidation,userController.Create);
router.delete('/user/:id',userController.Destroy);

router.post('/signIn',middllware.signInValidation,userController.signIn);



module.exports=router;
