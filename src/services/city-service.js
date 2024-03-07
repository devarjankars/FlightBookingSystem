const{ CityRepo} =require('../repository/index.js');


class cityServices {

constructor(){
    this.cityService = new CityRepo()
}
async createCity(data){
    try {
        console.log(data);
        const city=await this.cityService.createCity(data);
        return city;
    } catch (error) {
        console.log('somthing went wrong at service layer',error);
        
    }
}
async deleteCity(cityID){
    try {
        const res=await this.cityService.deleteCity(cityID);
        return res;
        
    } catch (error) {
        console.log('somthing went wrong at service layer');
        
    }
}
async updateCity(data){
    try {
        const city=this.cityService.updateCity(data)
        return city;
        
    } catch (error) {
        console.log('somthing went wrong at service layer');
        
    }
}
async getCity(cityID){
    try {
     const city=await this.cityService.getCity(cityID)
     return city;
        
    } catch (error) {
        console.log('somthing went wrong at service layer');
        
    }
}
async getAll(){
    try {
     const cities=await this.cityService.getAll();
     return cities;
        
    } catch (error) {
        console.log('somthing went wrong at service layer');
        
    }
}

}




module.exports=cityServices;