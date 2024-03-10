
const curdService= require('./curd-services');
const {airpot}=require('../repository/index')
class airpotService extends curdService{

    constructor(){
        const aiportRepo= new airpot();
        super(aiportRepo);
    }
}



module.exports= airpotService;