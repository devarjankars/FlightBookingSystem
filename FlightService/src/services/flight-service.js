const {FigthRepo,AirplainRepo}=require('../repository/index');



class FlightService {

constructor(){
  this.airplainService=new AirplainRepo();
  this.flightService=new FigthRepo();
}

async createFlight (data){
    try {
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

}

module.exports=FlightService;