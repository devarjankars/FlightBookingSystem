const {FlightService}=require('../services/index');
const {Flight}=require('../models/index');

const flightService= new FlightService();



const Create= async(req,res)=>{
try {
    // console.log(req.body)
    const flight=await flightService.createFlight(req.body);
    console.log(req.body)
    return res.status(201)
    .json({
        message:"Succesfully created flight",
         data:flight,
         err:{},

    })
} catch (error) {
    console.log(error);
    return res.status(500).json({
        message:"Something went Wrong",
        err:error,
    });

    
}
}

const getFlight= async (req,res)=>{
    try {
        // console.log(req.body)
        const flight=await flightService.createFlight(req.body);
        return res.status(201)
        .json({
            message:"Succesfully gets the  flight",
             data:flight,
             err:{},
    
        })
    } catch (error) {
        console.log(error);
        return res.status(404).json({
            message:"Something went Wrong",
            err:error.message,
        });
    
        
    }
    
}

const getAll=async(req,res)=>{
    try {
    
        const flight=await flightService.getAllFlight(req.query);

        return res.status(201)
        .json({
            message:"Succesfully fetched flight",
             data:flight,
             err:{},

        })
    }  catch (error) {
        console.log(error);
        return res.status(404).json({
            message:"Something went Wrong",
            err:error.message,
        });
    
        
    }
}
module.exports={Create,getFlight, getAll}