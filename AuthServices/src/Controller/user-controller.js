const UserService= require('../services/userServices');

const userService= new UserService();
const Create=async (req,res)=>{
    try {
        const response = await userService.Create(req.body);

        return res.status(201).json({
            message:"succesfull  user created",
            data:response
        })
        
    } catch (error) {
        return res.status(500).json({
            message:"Something went Wrong",
            err:error,
        });
        
    }
}


const Destroy =async (req,res)=>{
    try {
        
        const response= await userService.Destroy(req.params.id);
        return res.status(200).json({
            message:"succesfull deleted user",
            data:response
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:"Something went Wrong",
            err:error,
        });
        
    }
}

const signIn= async( req,res)=>{
    try {
    const response= await userService.signIn(req.body.email,req.body.password);
        return res.status(200).json({
            message:"succesfull sign in user",
            data:response
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:"Something went Wrong",
            err:error,
        });
 }
}
 const isAdmin= async(req,res)=>{
    try{
    const response= await userService.isAdmin(req.body.id);
    return res.status(200).json({
        message:"succesfull get the user role",
        data:response
    })
    
} catch (error) {
    console.log(error);
    return res.status(500).json({
        message:"Something went Wrong in controller",
        err:error,
    });
 }
}




module.exports={
    Create,
    Destroy,
    signIn,
    isAdmin,
}