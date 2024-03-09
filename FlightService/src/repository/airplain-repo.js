const {Airplain}=require('../models/index');

class AirplainRepo{

    async getAirplain (AirplainId){
        try {
            console.log(AirplainId);
            const airplain= await Airplain.findByPk(AirplainId);
        return airplain;
            
        } catch (error) {
            console.log("Error in Airplain repo",error);
            throw {error}
        }
        

    }

}
module.exports= AirplainRepo;