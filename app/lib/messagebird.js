var messagebird = require('messagebird')('IfIeF6YvxBjn1Apc6fZwwtb9G');


    module.exports.removedmessage = async(data)=> {
        try{
            var params = {
                'originator': 'TestMessage',
                'recipients': [
                    '+918606528352'
              ],
                'body': `You have been removed to  department '${data.depno}' as a '${data.job}' `
              };
            messagebird.messages.create(params, function (err, response) {
                if (err) {
                  return console.log(err);
                }
                console.log(response);
              });  
           
        
        }
        catch(err){
            console.log("----- error ----- :", err)
            return err
        }
      
    } 
    
    
    module.exports.addedmessages = async(data)=> {
        try{
            console.log(data)
            var params = {
                'originator': 'TestMessage',
                'recipients': [
                    '+918606528352'
              ],
                'body': `You have been removed to  department '${data.depno}' as a '${data.job}' `
              };
            messagebird.messages.create(params, function (err, response) {
                if (err) {
                  return console.log(err);
                }
                console.log(response);
              });
        }
        catch(err){
            console.log("----- error ----- :", error)
            return error
        }
      
    } 