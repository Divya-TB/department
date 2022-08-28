const Sequelize = require("sequelize");
const dbConfig = require('../config/db.config')
require("dotenv").config();



const employee = require("../modules/department/model/employee")
const department = require("../modules/department/model/department")







module.exports = async () => {

  var connection = {};
  
  console.log('dev')

  const sequelize = new Sequelize(dbConfig.database, dbConfig.user,
    dbConfig.password, {
      host: dbConfig.host,
      dialect: 'postgres',
      port: dbConfig.port,
      pool: {
        maxConnections: 200, maxIdleTime: 60 },
          // disable logging; default: console.log
          logging: false,
      
    });

  

  const Employee = employee(sequelize, Sequelize);
  const Department = department(sequelize, Sequelize);
  
  


  // table joining
  const { DataTypes } = Sequelize;
  const dbInstanceData = { DataTypes, dbInstance: sequelize };


  // Relations -- Table joining relation
  


  Department.hasMany(Employee,{foreignKey: 'dep_id'}) 
  Employee.belongsTo(Department, {
    
    foreignKey: 'dep_id'
  });


 

  Employee.hasMany(Department,{foreignKey : 'head_id'})
  Department.belongsTo(Employee, {
    as: 'head',
    foreignKey: 'head_id'
  });

  Employee.hasMany(Department,{foreignKey : 'assistant_id'})
  
 Department.belongsTo(Employee, {
     as: 'assistant',
    foreignKey: 'assistant_id'
   
  }
 );
  
 
 



  
  

  const Models = {
    dbInstanceData,
    Department,
    Employee
    
    

  };
  if (connection.isConnected) {
    console.log("=> Using existing connection.");
    return Models;
  }

  await sequelize.sync();
  await sequelize.authenticate();
  connection.isConnected = true;
  console.log('=> Created a new connection.')
  return { Models, sequelize };
};
