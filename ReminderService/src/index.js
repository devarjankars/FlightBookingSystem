require('dotenv').config()
const bodyParser = require('body-parser');
const express= require('express');
const app=express();
const apiRoutes=require('../routes/index')



const  setupServer= async ()=>{
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
pp.listen(`${process.env.PORT}`, async()=>{
    // await db.sequelize.sync({alter:true});
    
    console.log(`serve stared at${ process.env.PORT}`);
  });
  }
  
  setupServer();
