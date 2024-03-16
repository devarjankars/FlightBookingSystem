const { StatusCodes}= require('http-status-codes');

class ServiceError extends Error{

constructor( 
    message,
    explaination,
    statusCode=StatusCodes.INTERNAL_SERVER_ERROR,

){
    super()
    this.name="service Error",
    this.explaination=explaination,
    this.statusCode=statusCode,
    this.message=message

}



}


module.exports=ServiceError;