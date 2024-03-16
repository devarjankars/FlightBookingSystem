class appError extends Error{
    constructor(name, explaination ,statusCode,message){
        super();
        this.name=name,
        this.explaination=explaination,
        this.statusCode=statusCode,
        this.message=message
        
    }
}



module.exports=appError;