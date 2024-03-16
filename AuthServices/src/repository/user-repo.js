const {User, Role}=require('../models/index')
class UserRepo {

    async Create(data){
        try {
            const user=await User.create(data)
            return user;
        } catch (error) {
            console.log("error on user-repo",error);
        }
    }
    async Destroy(uId){
        try {
            const user=await User.destroy({where:{id:uId}})
            return user;
        } catch (error) {
            console.log("error on user-repo",error);
        }
    }
    async getByEmail(email){
        try {
            const user= await User.findOne({where:{email:email}})
            return user;
            
        } catch (error) {
            console.log("error in getting email");
            
        }
    }

  async  isAdmin (Uid){
        try {
            const u1=await User.findOne(Uid);
            const userRole= await Role.findOne({where:{name:"ADMIN"}});
            return u1.hasRole(userRole);
            
        } catch (error) {
            console.log(error);
        }
    }
     

    

}

module.exports=UserRepo