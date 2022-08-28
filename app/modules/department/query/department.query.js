const connectToDatabase = require('../../../config/db')
const Sequelize = require('sequelize')
module.exports.headlist = async (data) => {
    const DB = await connectToDatabase()
    try {
        const result = await DB.Models.Employee.findAll({
            include:[{
                model:DB.Models.Department,
                attributes: ['depno'],
                include:[{
                    model:DB.Models.Employee,
                    as: 'assistant',
                    attributes:['name'],
                 
                }]
            }],
              
           attributes:['id','name','phone'],
        order: [ ["id", "DESC"]],where: data.where, raw: true })
     
        if(result.length>0){
          
                return ({ "status": 200, "success_status": true, "response": " Head list", "info": result });

            } else {
                return ({ "status": 201, "success_status": true, "response": " Head list doest not exist", "info": result });
    
            }
            
        
  
    } catch (err) {
        console.log(err);
        return ({
            "status": 500, "success_status": false, "response": "Bad request", "info": err
            
        })

    } finally {
        await DB.sequelize.close();
    }
};





module.exports.Assistantlist = async (data) => {
    const DB = await connectToDatabase()
    try {
        const result = await DB.Models.Employee.findAll({
            include:[{
                model:DB.Models.Department,
                attributes: ['depno'],
                include:[{
                    model:DB.Models.Employee,
                    as: 'head',
                    attributes:['name'],
                   
                }]
            }],
              
           attributes:['id','name','phone'],
        order: [ ["id", "DESC"]],where: data.where, raw: true })
     
        if(result.length>0){
          
                return ({ "status": 200, "success_status": true, "response": " Assistant list", "info": result });

            } else {
                return ({ "status": 201, "success_status": true, "response": " Assistant list doest not exist", "info": result });
    
            }
            
        
  
    } catch (err) {
        console.log(err);
        return ({
            "status": 500, "success_status": false, "response": "Bad request", "info": err
            
        })

    } finally {
        await DB.sequelize.close();
    }
};



module.exports.update = async (data) => {
    const DB = await connectToDatabase()
    try {
        await DB.Models.Department.update(
                       
        data,{where: data.where})
     
      
                return ({ "status": 200, "success_status": true, "response": " updated the head or assistant of department" });

           
            
        
  
    } catch (err) {
        console.log(err);
        return ({
            "status": 500, "success_status": false, "response": "Bad request", "info": err
            
        })

    } finally {
        await DB.sequelize.close();
    }
};



module.exports.getone = async (data) => {
    const DB = await connectToDatabase()
    try {
        const result = await DB.Models.Department.findAll({
            attributes:['id','head_id','assistant_id',[Sequelize.col('head.phone'), 'head_phone'],[Sequelize.col('assistant.phone'), 'assistant_phone']],
           include:[
           {
                    model:DB.Models.Employee,
                    as: 'head',
                    attributes:[],
                    
                },
                {
                model:DB.Models.Employee,
                as: 'assistant',
                attributes:[],
                }
            ],
            
              
           
        order: [ ["id", "DESC"]],where: data.where, raw: true })

    
     
        if(result.length>0){
          
                return ({ "status": 200, "success_status": true, "response": " Assistant list", "info": result });

            } else {
                return ({ "status": 201, "success_status": true, "response": " Assistant list doest not exist", "info": result });
    
            }
            
        
  
    } catch (err) {
        console.log(err);
        return ({
            "status": 500, "success_status": false, "response": "Bad request", "info": err
            
        })

    } finally {
        await DB.sequelize.close();
    }
};



module.exports.update = async (data) => {
    const DB = await connectToDatabase()
    try {
        await DB.Models.Department.update(
                       
        data,{where: data.where})
     
      
                return ({ "status": 200, "success_status": true, "response": " updated the head or assistant of department" });

           
            
        
  
    } catch (err) {
        console.log(err);
        return ({
            "status": 500, "success_status": false, "response": "Bad request", "info": err
            
        })

    } finally {
        await DB.sequelize.close();
    }
};



