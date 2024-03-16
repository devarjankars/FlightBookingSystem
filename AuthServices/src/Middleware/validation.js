

const signupValidation=( req,res,next)=>{
    try {

        if(!req.body.email || !req.body.password) {
            return res.status(400).json({
                message:"Password or email is missing please chack",
                success:false,
                error:{},
            })
        }
        next();    
    } catch (error) {
        console.log(error);
        
    }

}
const signInValidation=( req,res,next)=>{
    try {

        if(!req.body.email || !req.body.password) {
            return res.status(400).json({
                message:"Password or email is missing please chack",
                success:false,
                error:{},
            })
        }
        next();    
    } catch (error) {
        console.log(error);
        
    }

}

module.exports={
    signupValidation,
    signInValidation,
}