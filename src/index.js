require('dotenv').config()
const bodyParser = require('body-parser');
const express= require('express');

const app=express();
const  setupServer= async ()=>{
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.listen(`${process.env.PORT}`,()=>{
  console.log(`serve stared at${ process.env.PORT}`);
});
}

setupServer();