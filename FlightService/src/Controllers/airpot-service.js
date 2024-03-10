const {airpotService}= require('../services/index');

const AirpotService=new airpotService()
const httpCode=require('../Utils/httpCode')

const Create=async (req,res)=>{
    try {
        const response= await AirpotService.Create(req.body);

        return res.status(httpCode.successCode.CREATED).json({
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
        
        const response= await AirpotService.Destroy(req.params.id);
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
        const response= await AirpotService.Update(req.params.id,req.body);
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
        const response= await AirpotService.Get(req.params.id);
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
    const cities= await AirpotService.getAll();
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