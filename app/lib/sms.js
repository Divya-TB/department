const accountSid = 'ACae246b43ae6ef695bf1bcc4800565cff';
const authToken = 'a096f72def88cd90ca90a5e5a4260e7d';
const client = require('twilio')(accountSid, authToken);

module.exports.removedmessage = async(data)=> {
    try{
    
        client.messages
        .create({
           body: 'You have been removed from department ',
           from: '+19287664388',
           to: data
           
         })
        .then(message => console.log(message.sid));
    }
    catch(err){
        console.log("----- error ----- :", error)
        return error
    }
  
} 


module.exports.addedmessages = async(data)=> {
    try{

        client.messages
        .create({
           body: 'You have been to  department ',
           from: '+19287664388',
           to: data
         })
        .then(message => console.log(message.sid));
    }
    catch(err){
        console.log("----- error ----- :", error)
        return error
    }
  
} 