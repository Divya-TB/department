module.exports = app => {

    const controller = require("../controller/department.controller");
  
   
  
    
     


      app.put("/api/department/update/sms/:dep_id", controller.update);
    /**
    * @swagger
    *
    * /api/department/update/sms/{dep_id}:
    *   put:
    *     description:
    *       - Use to  update head and assistant of department
    * 
    *     summary: Use to  update head and assistant of department 
    * 
    *     tags:
    *       - Message Bird Module
    *     produces:
    *       - application/json
    *     parameters:
    *       - in: header
    *         name: Content-Type
    *         type: string
    *         value: application/x-www-form-urlencoded
    *         required: true
    * 
    * 
    *       - in: path
    *         name: dep_id   
    *         required: true
    *         type: integer
    
   
    *       - name: head_id
    *         in: formData
    *         type: integer
    *         required: true


    *       - name: assistant_id
    *         in: formData
    *         type: integer
    *         required: true
   
    *     responses:
    *         200:
    *           description: Success
    */
  


}