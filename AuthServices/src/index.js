require('dotenv').config()
const bodyParser = require('body-parser');
const express= require('express');



const app= express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
const apiRoute=require('./Routes/index');

app.use('/api',apiRoute)

 const {Role,User}= require('./models/index');
const startServer= async()=>{
try {
    
    app.listen(`${process.env.PORT}`, async()=>{
    console.log(`Server started`);
    // db.sequelize.sync({force:true})
    const u1= await User.findByPk()
    });
}
catch (error) {
    console.log(error);    
}


}
startServer();