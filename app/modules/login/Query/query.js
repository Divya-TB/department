const connectToDatabase = require('../../../config/db')

const Sequelize = require('sequelize')

module.exports.employee= async (data) => {
    const DB = await connectToDatabase()
    try {
         await DB.Models.Employee.create({data })
     
       
          
                return ({ "status": 200, "success_status": true, "response": "created employee"});

            
            
        
  
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
        const result = await DB.Models.Employee.findAll({
           
              
           attributes:['email'],
        where: data.where, raw: true })
     
        if(result.length>0){
          
                return ({ "status": 200, "success_status": true, "response": " user list", "info": result });

            } else {
                return ({ "status": 201, "success_status": true, "response": " user list doest not exist", "info": result });
    
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


