class curdService{

    constructor(repo){
        this.repo=repo;
    }

    async Create(data){
        try {
            console.log(data);
            const city=await this.repo.Create(data);
            return city;
        } catch (error) {
            console.log('somthing went wrong at service layer',error);
            
        }
    }
    async Destroy(ID){
        try {
            const res=await this.repo.Destroy(ID);
            return res;
            
        } catch (error) {
            console.log('somthing went wrong at service layer');
            
        }
    }
    async Update(data,id){
        try {
            const city=this.repo.Update(data,id)
            return city;
            
        } catch (error) {
            console.log('somthing went wrong at service layer');
            
        }
    }
    async Get(ID){
        try {
         const city=await this.repo.Get(ID)
         return city;
            
        } catch (error) {
            console.log('somthing went wrong at service layer');
            
        }
    }
    async getAll(){
        try {
         const city=await this.repo.getAll();
         return city;
            
        } catch (error) {
            console.log('somthing went wrong at service layer');
            
        }
    }

}
module.exports=curdService;