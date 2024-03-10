const curdRepo= require('./curd-Repo');
const {Airpot}= require('../models/index');

class airpot extends curdRepo{

    constructor(){
        super(Airpot);
    }
}

module.exports=airpot;