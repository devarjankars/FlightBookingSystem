const {Flight}= require('../models/index')

class FigthRepo{
  async createFight(data){
 try {
   
    const flight= await Flight.create(data)
    return flight;
    
 } catch (error) {
    console.log(error)
    throw{error}
    
   }
  }
}
module.exports=FigthRepo;