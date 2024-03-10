

class curdRepo {
    constructor(model){
        this.model=model;
    }


    async Create(data){
        try {
            const result= await this.model.create(data)
            return result;
        } catch (error) {
            console.log(error,"Something wrong in Curd Repo");
          throw error ; 
        }
    }
    async Update(data,mId){
        try {
          const res= await this.model.update(data,{where:{id:mId}})  
          return res;

        } catch (error) {
            console.log(error,"Something wrong in Curd Repo");
          throw error ; 
        }
    }
    async Destroy(mId){
        try {
            const res= await this.model.destroy({where:{id:mId}})
            return res;
        } catch (error) {
            console.log(error,"Something wrong in Curd Repo");
          throw error ; 
        }
    }
    async Get(mId){
        try {
    const result =await this.model.findByPk(mId)
    return result;
            
        } catch (error) {
            console.log(error,"Something wrong in Curd Repo");
          throw error ; 
        }
    }
    async getAll(){
        try {
            const result=await this.model.findAll();
            return result
                    
                } catch (error) {
                    console.log(error,"Something wrong in Curd Repo");
                  throw error ; 
                }
    }


}
module.exports= curdRepo;
