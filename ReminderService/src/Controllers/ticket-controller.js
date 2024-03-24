const TicketService=require('../services/emailService');


const Create=async(req,res)=>{
    try {
  const response= await TicketService.Create(req.body);
  return res.status(201).json({
    success:true,
    result:response,
    message:"Successfully created yhe Ticket",
  })

        
    } catch (error) {
        return res.status(201).json({
            success:false,
            message:"somthing went wrong in controller",
        })
        
    }
}


const Update=async(req,res)=>{
    try {
        const response= await TicketService.Create(req.body);
        return res.status(201).json({
          success:true,
          result:response,
          message:"Successfully update the Ticket",
        })
      
              
          } catch (error) {
              return res.status(201).json({
                  success:false,
                  message:"somthing went wrong in controller",
              })
              
          }
      }
module.exports={
    Create,
    Update
}