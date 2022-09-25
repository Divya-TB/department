const services = require('../services/department.services')



  module.exports.update = async (req, res) => {
    try {
        
        const data = await services.updatedep(req)
        res.status(data.status).send(data);
  
    } catch (error) {
        console.error(error);
        res.status(500).send({
            "success_status": false,
            "response": "Internal Server Error",
            "info": error
        });
    }
  };
