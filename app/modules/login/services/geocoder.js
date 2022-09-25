

const opencage = require('opencage-api-client');



module.exports.res = async (req)=>{
    try{
        
        let data = await opencage.geocode({ q: req.body.address,key:'8495548473c94a68b76fcb5e4fa3eddc'});
        console.log(data)
        if (data.results.length > 0) {
           
            const place = data.results[0];
            return({
                status:200,
                status_code:true,
                response:'latitude and longitude',
                info :{
                    latitude:place.geometry.lat,
                    longitude:place.geometry.lng
                }
            })
         
          } else {
           return('no result')
         
          }
    }
   
 
    catch(error) {
    
      console.log('Error', error.message);
    
            return({
                status:402,
                status_code:false,
                response: 'error'
            })
    };
}
