const {Flight}= require('../models/index')
const {Op}= require('sequelize')

class FigthRepo{
   

      #createFilter (data){
          let filetr={};
          if(data.DeptureAirpotId){
            filetr.DeptureAirpotId=data.DeptureAirpotId;

          }
          if(data.ArrivalAirpotId){
            filetr.ArrivalAirpotId=data.ArrivalAirpotId;
          }
          if(data.minPrice){
            Object.assign(filetr, {price:{[Op.gte]:data.minPrice}})

          }
          if(data.maxPrice){
            Object.assign(filetr,{price:{[Op.lte]:data.maxPrice}})
          }
          console.log(filetr);
          return filetr

      }
  

  async createFight(data){
 try {
   
    const flight= await Flight.create(data)
    return flight;
    
 } catch (error) {
    console.log(error)
    throw{error}
    
   }
  }
  async getFight(FId){
   try {
      const flight= await Flight.findByPk(FId)
      return flight;
      
   } catch (error) {
      console.log(error);
      
   }
  }
  async getAllFlight(data){
   try {
      const filterObj=    this.#createFilter(data);
      console.log(filterObj);
      const flights=await Flight.findAll({
         where: filterObj
      })
      return flights;
   } catch (error) {
      console.log(error);
      throw error;
   }
  }
  async Update( FId,data){
   try {
      console.log(data);
      let seat= data.totalSeats
      console.log(FId.id)
      const flight=await Flight.update( {totalSeats:seat},{
         where: { id:FId.id  }
      })
      return flight;
   } catch (error) {
      console.log(error.message);
      throw error;
   }
  }


}

module.exports=FigthRepo;