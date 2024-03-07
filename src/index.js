require('dotenv').config()
const bodyParser = require('body-parser');
const express= require('express');
const CityRepo= require('./repository/City-Repo')
const app=express();
const apiRoutes=require('./routes/index')




const  setupServer= async ()=>{
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))



app.use('/api',apiRoutes);



app.listen(`${process.env.PORT}`,()=>{
  const repo=new CityRepo()
  console.log(`serve stared at${ process.env.PORT}`);
});
}

setupServer();