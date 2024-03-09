require('dotenv').config()
const bodyParser = require('body-parser');
const express= require('express');
const CityRepo= require('./repository/City-Repo')
const app=express();
const apiRoutes=require('./routes/index')

// const {Airplain}= require('./models/index');


const  setupServer= async ()=>{
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))



app.use('/api',apiRoutes);



app.listen(`${process.env.PORT}`, async()=>{
  const repo=new CityRepo()
  // await db.sequelize.sync({alter:true});
  

  console.log(`serve stared at${ process.env.PORT}`);
});
}

setupServer();