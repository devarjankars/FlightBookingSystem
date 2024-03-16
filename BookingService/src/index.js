require('dotenv').config;
const express= require('express');
const app=express();
const bodyParser= require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))




//routes
const ApiRoutes= require('./Routes/index');

app.use('/api',ApiRoutes);



//DB
const db= require('./models/index');







const server=async()=>{
    try {
       app.listen(process.env.PORT,()=>{
        console.log('server started');
        db.sequelize.sync({alter:true});
       })
        
    } catch (error) {
       console.log(error); 
    }
}

server()
