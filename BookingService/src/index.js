require('dotenv').config();
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
   
       app.listen(process.env.PORT,()=>{
        console.log(`server started ${process.env.PORT}`);
        // db.sequelize.sync({alter:true});
       })
        
    
}

server()
