
const UserRepo= require('../repository/user-repo');
const {KEY}= require('../config/serverConfig')
const jwt= require('jsonwebtoken');
const bcrypt= require('bcrypt')
class userService {
    constructor(){
        this.userRepo= new UserRepo();
    }

    async Create(data){
        try {
            const user= await this.userRepo.Create(data);
            return user;
        } catch (error) {
            console.log("error in service layer",error);
        }
    }

    
    async Destroy(uId){
        try {
            const user=this.userRepo.Destroy(uId);
            return user;
        } catch (error) {
            console.log("error in service layer",error);
        }
    }
async signIn(email,userPassword){
    try {
        const user=await this.userRepo.getByEmail(email);

        const passwordMatch = this.checkPassword(userPassword, user.password)

        if(!passwordMatch){
            console.log("Wrong Password");
            throw {err:"password is wrong"}
        }

        const newToken= this.CreateToken({email:user.email,id:user.id});
        return newToken
    } catch (error) {
        console.log("Error in signIn ",error)
    }

}

  async isAdmin(uId){
    try {
        const userisAdmin=await this.userRepo.isAdmin(uId)
        return userisAdmin;
        
    } catch (error) {
        console.log(error);
        
    }
  }


    CreateToken(user){
        try {
            const token= jwt.sign(user,KEY,{expiresIn:'1day'});
             return token;
        } catch (error) {
            console.log(`somthing went wrong in token creation`,error);
        }
    }
    VerifyToken(token){
        try {
            const res= jwt.verify(token,KEY);
            return res;
        } catch (error) {
            console.log('Error in vefification ',error);
        }

    }
    checkPassword(plainPassword,encodedPassword){
          try {
            console.log(plainPassword,encodedPassword);
             return bcrypt.compareSync(plainPassword,encodedPassword);
          } catch (error) {
            console.log("password comparisan error",error);
            
          }
    }
    
}


module.exports=userService;