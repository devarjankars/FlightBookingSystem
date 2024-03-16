const { StatusCodes } = require("http-status-codes");

class ValidationError extends Error{

    constructor(err){
        super();
      let explaination=[];
      err.errors.forEach(element => {
        explaination.push(element.message);
        
      });
        this.name="Validation Error",
        this.explaination="Invalid User Please check username and password",
        this.statusCode=StatusCodes.BAD_REQUEST,
        this.message=explaination;

    }
}


module.exports=ValidationError;