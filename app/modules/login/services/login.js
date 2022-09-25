const query = require('../Query/query')


module.exports.create = async(data)=>{
    try{
 let query_builder;
 query_builder ={
    name:data.name,
    email:data.email,
    phone:'null',
    job:'null',

 }

 let query={
    email: data.email
 }
const result = await query.getone(query);
if(result.length>0){
    return ({ "status": 201, "success_status": true, "response": "User already exists" });
}
else{
    const data = await query.employee(query_builder);
    return data
}
    }
    catch(err){

    }
}