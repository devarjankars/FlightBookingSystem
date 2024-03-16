const { StatusCodes } = require('http-status-codes');
const BookingRepo=require('../Repositroy/booking-repo');
const ServiceError = require('../Utils/service-errors');
const axios =require('axios')


class BookingService {
constructor(){
 this.bookingRepo=new BookingRepo()
}


async Create(data){
    try {
        console.log(data)
       let fID=data.flightId
       console.log(`${process.env.FLIGHTAPI}`)
       let flightDataUrl=`${process.env.FLIGHTAPI}/api/v1/flight/${fID}`;
       console.log(flightDataUrl)
       let Flight= await axios.get(flightDataUrl);
       let FlightData= Flight.data.data;
       if(data.Seats > FlightData.totalSeats){
        throw new ServiceError(
            "something went wrong",
            "No seats Availble",
            StatusCodes.NO_CONTENT
        )
       }
      console.log(FlightData);
    let Amount= FlightData.price *data.Seats;
    let payload ={...data,Amount};
   
    let updateSeats=FlightData.totalSeats-data.Seats
    await axios.patch(flightDataUrl,{totalSeats: updateSeats})
   
    const book= await this.bookingRepo.Create(payload);
    const finalBooking= await this.bookingRepo.Update(book.id,{status:"Booked"})
    return finalBooking;
        
    } catch (error) {
        console.log(error.message);
        throw new ServiceError(
            "Service Layer Error",
            "something went wrong during Creating Booking in Service layer ",
            StatusCodes.INTERNAL_SERVER_ERROR
        
        );
        
    }

}

async Update(Data){
    try {
        
    } catch (error) {
        throw new ServiceError(
            "Service Layer Error",
            "something went wrong during Updation Booking in Service layer ",
            StatusCodes.INTERNAL_SERVER_ERROR
        
        );
    }
}

}




module.exports= BookingService;