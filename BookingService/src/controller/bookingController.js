const { StatusCodes } = require('http-status-codes');
const BookingService= require('../Services/booking-service');
const ServiceError = require('../Utils/service-errors');

const bookingService= new BookingService();
const Create=async(req,res)=>{
    try {
        console.log(req.body);
       const response= await bookingService.Create(req.body);

       return res.status(StatusCodes.OK).json({
        message:"success",
        data:response,
        error:{},
       })
        
    } catch (error) {
        console.log("something went wrong in controller");
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error:error.message,
            message:"failed"
        })
        
    }
}


module.exports={
    Create,
}