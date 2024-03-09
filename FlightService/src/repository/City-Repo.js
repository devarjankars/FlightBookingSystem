const  {City} =require('../models/index.js');

class CityRepo{

async createCity(data){
   try{
    console.log(data);
     const city= await City.create({name:data})
   return city;
}
catch(err){
    console.log(`something wrong Wrong in city repo`);;
}
}
async deleteCity(cityID){
    try{
        await City.destroy({
            where:{
                id:cityID
            }
        })
         return `item deleted`;
    }catch(err){
        console.log(`something wrong Wrong in city repo`);;
    }
}
async updateCity(cityID,data){
    try{
     const city=   await City.update(data,{
            where:{
                id:cityID
            }
        })
        return city;
         
    }catch(err){
        console.log(`something wrong Wrong in city repo`);;
    }
}
async getCity(cityID){
    try{
       const city= await City.findByPk(cityID);
       return city;
         
    }catch(err){
        console.log(`something wrong Wrong in city repo`);
    }
}
async getAll(){
    try {
        const citites= await City.findAll();
        return citites;
    } catch (error) {
        console.log(`something wrong Wrong in city repo`);
 
    }
}

}




module.exports=CityRepo;