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
      
            if(req.body.head_id != is_exist.info[0].head_id){
            
              await sms.removedmessage({phone:is_exist.info[0].head_phone, depno: is_exist.info[0].depno, job : 'head'});
              await sms.addedmessages({phone:exist.info[0].head_phone, depno: exist.info[0].depno,job : 'head'});

            }
         
           
            if(req.body.assistant_id != is_exist.info[0].assistant_id){
             
              await sms.removedmessage({phone:is_exist.info[0].assistant_phone,depno:is_exist.info[0].depno, job : 'assistant'});
              await sms.addedmessages({phone:exist.info[0].assistant_phone,depno:exist.info[0].depno,job : 'assistant'});
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

