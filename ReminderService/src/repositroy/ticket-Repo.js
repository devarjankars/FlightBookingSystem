const {notificationTask}= require('../models/index')
const {Op} =require('sequelize')

class ticketRepo{


    async getAll(){
        try {
            const tickets= await notificationTask.findAll();
            return tickets;
        } catch (error) {
            throw (error);
            
        }
    }
    async Create(data){
        try {
            const res= await notificationTask.create(data);
            return res;
        } catch (error) {
            console.log("Repo Error",error.message);
            
        }
    }

    async Get(){
        try {
            const res=  await notificationTask.findAll({
                where:{
                    status:"Pending",
                    notificationTime:{
                        [Op.lte]:new Date()
                    }
                }
            })
            return res;
            
        } catch (error) {
            console.log("Repo Error",error.message);
            
        }
    }

    async Update( id,data){
        try {
            const ticket = await notificationTask.findByPk(id);
            if(data.status){
                console.log(ticket);

            ticket.status=data.status;
            await ticket.save();
            }
            return ticket;  
            
        } catch (error) {
         console.log(error);   
        }

    }
}




module.exports= ticketRepo;