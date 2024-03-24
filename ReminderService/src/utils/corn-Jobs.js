// */5 * * * *
const corn= require('node-cron')
const emailService= require('../services/emailService')
const Sender=require('../config/emailConfig')
const CornJob= corn.schedule( "*/1 * * * *", async()=>{
    const res= await emailService.fetchPendingEmail();
    console.log(res);
    res.forEach(email => {
        console.log("hello");
        Sender.Sender.sendMail({
         
           from: "Reminder Services for Booking",
           to: email.recipentEmail,
           subject: `Reminder of Flight Confirmation: ${email.subject}`,
           text: `Your Flight Ticket is Booked and Confirm Please reach in Time:${email.content}`,



        }, async(err,data)=>{
            if(err){
                console.log(err);
            }else{
                console.log(data);
                console.log("hello data");
                await emailService.Update(email.id,{status:"Success"})

            }
        })
    });


    console.log(res);
})
