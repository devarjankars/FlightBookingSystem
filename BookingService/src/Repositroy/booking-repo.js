const { ValidationError } = require('sequelize');
const {Booking, sequelize}=require('../models/index');
const appError = require('../Utils/genric-error');
const { StatusCodes } = require('http-status-codes');

class BookingRepo{

    

    async Create(data){
        try {

            
        } catch (error) {
            if(error.name===SequelizeValidationError)
            {
                throw new ValidationError(error);
            }
            else{
                throw new appError(
                    "Repository error",
                    "unable to create booking something went wrong in repo layer",
                    StatusCodes.INTERNAL_SERVER_ERROR,
                    "unable to processed"
                )
            }
            
        }

    }

    async Update(){

    }
    async Destroy(){
        
    }
}
module.exports=BookingRepo;