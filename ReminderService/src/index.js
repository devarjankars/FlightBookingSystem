require('dotenv').config()
const bodyParser = require('body-parser');
const express= require('express');
const app=express();
var cron = require('node-cron');

const {sendmail}= require('./services/emailService')

const  setupServer= async ()=>{
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

const jobs= require('./utils/corn-Jobs')
const controller= require('./Controllers/ticket-controller')

//route
app.post('/api/V1/ticket',controller.Create)









app.listen(`${process.env.PORT}`, async()=>{
    // await db.sequelize.sync({alter:true});
    
    console.log(`serve stared at${ process.env.PORT}`);

    // sendmail(
    //   "support@ademin.com",
    //   "devarjankars@gmail.com",
    //   "Testing Mails is working fine",
    //   "Hello sanjay ji"
    // )
    
  });
  }
  
  setupServer();
