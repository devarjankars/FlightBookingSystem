
const {Sender}= require('../config/emailConfig')
const ticketRepo= require('../repositroy/ticket-Repo');



const Repo= new ticketRepo();
const sendmail= (From, To, Subject, Body)=>{
Sender.sendMail({
    from:From,
    to:To,
    subject:Subject,
    text:Body
})
}
const fetchPendingEmail= async(notificationTime)=>{
try {
   
    const res= await Repo.Get();
    return res;

} catch (error) {
    console.log(error);
}
}
const Update= async(id,data)=>
{ 
    try {
        console.log(id,data);
    const res= await Repo.Update(id ,data);
    return res;
    } catch (error) {
       console.log(error);

    }
}

const Create=async(data)=>{
    try {
        const res= await Repo.Create(data)
        return res;
        } catch (error) {
           console.log(error);
    
        }   
}



module.exports= {
    sendmail,
    fetchPendingEmail,
    Update,
    Create,
}