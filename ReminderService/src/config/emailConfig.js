const nodeMailer= require('nodemailer');
const {Email_ID,Email_Pwd} =require('../config/serverConfig')

const Sender= nodeMailer.createTransport({
service:'gmail',
auth:{
    user:Email_ID,
    pass:Email_Pwd
}
})

module.exports={Sender};