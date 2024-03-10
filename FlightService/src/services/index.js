const cityServices=require('../services/city-service');
const FlightService= require('./flight-service');
const curdService= require('./curd-services')
module.exports={
    cityServices,
    FlightService,
    curdService,
    airpotService:require('./airpot-Service'),
}