const {FlightService}=require('../services/index');

const flightService= new FlightService();

const Create= async(req,res)=>{
try {
    console.log(req.body)
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
module.exports={Create}