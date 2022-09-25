
const services = require('../services/geocoder')

module.exports.geocoder = async(req,res)=> {
    try {
        
        const data = await services.res(req)
        res.status(200).send(data);
  
    } catch (error) {
        console.error(error);
        res.status(500).send({
            "success_status": false,
            "response": "Internal Server Error",
            "info": error
        });
    }
}