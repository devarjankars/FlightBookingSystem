const {FigthRepo,AirplainRepo}=require('../repository/index');



class FlightService {

constructor(){
  this.airplainService=new AirplainRepo();
  this.flightService=new FigthRepo();
}

async createFlight (data){
    try {
        console.log(data);
        console.log(data.airplainId);
        const airplain= await this.airplainService.getAirplain(data.airplainId);
        const  fligt= await  this.flightService.createFight({
            ...data, totalSeats:airplain.capcity

        })

        return fligt;
    } catch (error) {
        console.log("error in Service Layer");
        throw error;
        
    }
}
async getFlight(FId){
    try {
        const flight= await this.flightService.getFight(FId);
        return flight;
        
    } catch (error) {
        console.log(error);

        
    }
}
    async  getAllFlight(data){
        try {
            const flights=await this.flightService.getAllFlight(data);
            return flights;
            
        } catch (err) {
            console.log(err);
            
        }
    }
    async Update(FId,data){
        try {
            const flight= await this.flightService.Update(FId,data);
            return flight;
            
        } catch (error) {
            console.log(error);
    
            
        }
    }


}

module.exports=FlightService;