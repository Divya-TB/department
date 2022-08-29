const Query = require('../query/department.query')
const sms = require('../../../lib/sms')



module.exports.head =  async (req)=>{
  try{
    
  let query_builder={
    where : {status : 1,job:'head'},
  }
    const data = await Query.headlist(query_builder);
    return(data);
  }
  catch (error) {
    console.error(error);
    return ({ "status": 400, "success_status": false, "response": "Bad request", "info": error });
}
}



module.exports.assistant =  async (req)=>{
  try{
    
  let query_builder={
    where : {status : 1,job:'assistant'},
  }
    const data = await Query.Assistantlist(query_builder);
    return(data);
  }
  catch (error) {
    console.error(error);
    return ({ "status": 400, "success_status": false, "response": "Bad request", "info": error });
}
}




module.exports.updatedep =  async (req)=>{
  try{
    if(req.params.dep_id && req.body){
      

      let query_builder={
        ...req.body,
        where : {id : req.params.dep_id},
      }
     let is_exist;
       is_exist = await Query.getone(query_builder)
      
        const data = await Query.update(query_builder);
         const exist = await Query.getone(query_builder);
      
         if(is_exist.status === 200 || exist.status === 200){
         
            if(req.body.head_id !== exist.head_id){
              await sms.removedmessage(is_exist.info[0].head_phone);
              await sms.addedmessages(exist.info[0].head_phone);

            }
         
           
            if(req.body.assistant_id !== exist.assistant_id){
              await sms.removedmessage(is_exist.info[0].assistant_phone);
              await sms.addedmessages(exist.info[0].assistant_phone);
            }
          }
          return(data);

         
        
      }
    }
 
  catch (error) {
    console.error(error);
    return ({ "status": 400, "success_status": false, "response": "Bad request", "info": error });
}
}

