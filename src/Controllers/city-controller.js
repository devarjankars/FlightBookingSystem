const {cityServices}=require('../services/index');

const cityService=new cityServices();

const Create=async (req,res)=>{
    try {
        const response= await cityService.createCity(req.body.name);
        console.log(req.body.name)

        return res.status(201).json({
            message:"succesfull created",
            data:response
        })
        
    } catch (error) {
        return res.status(500).json({
            message:"Something went Wrong",
            err:error,
        });
        
    }
}


const Delete =async (req,res)=>{
    try {
        
        const response= await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            message:"succesfull deleted",
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
const Update=async (req,res)=>{
    try {
        const response= await cityService.updateCity(req.params.id,req.body);
        return res.status(201).json({
            message:"succesfull updated",
            response:response
        })
        
    } catch (error) {
        return res.status(500).json({
            message:"Something went Wrong",
            err:error,
        });
        
    }
}
const Get=async (req,res)=>{
    try {
        const response= await cityService.getCity(req.params.id);
        return res.status(201).json({
            message:"succesfull get records",
            response:response
        })
        
    } catch (error) {
        return res.status(500).json({
            message:"Something went Wrong",
            err:error,
        });
        
    }
}
const getAll=async(req,res)=>{
    try{
    const cities= await cityService.getAll();
        return res.status(201).json({
            message:"succesfull get records",
            response:cities,
        })
    }
     catch (error) {
        return res.status(500).json({
            message:"Something went Wrong",
            err:error,
        });
        
    }
}


module.exports={
    Create,
    Delete,
    Update,
    Get,
    getAll,
}