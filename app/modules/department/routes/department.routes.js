module.exports = app => {

    const controller = require("../controller/department.controller");
  
   
  
     app.get("/api/head/List", controller.headlist);
  
    /**
    * @swagger
    *
    * /api/head/List:
    *   get:
    *     description:
    *       - Use to get all head
    * 
    *     summary: Use to get all head
    * 
    *     tags:
    *        - Department Module
    * 
    *     produces:
    *       - application/json
    * 
    *     consumes:
    *       - multipart/form-data
    * 
    *     parameters:
    *       - in: header
    *         name: Content-Type
    *         type: string
    *         value: application/x-www-form-urlencoded
    *         required: true
    *     responses:
    *         200:
    *           description: Success
    */





     app.get("/api/assistant/List", controller.assistantlist);
  
     /**
     * @swagger
     *
     * /api/assistant/List:
     *   get:
     *     description:
     *       - Use to get all assistant
     * 
     *     summary: Use to get all assistant
     * 
     *     tags:
     *        - Department Module
     * 
     *     produces:
     *       - application/json
     * 
     *     consumes:
     *       - multipart/form-data
     * 
     *     parameters:
     *       - in: header
     *         name: Content-Type
     *         type: string
     *         value: application/x-www-form-urlencoded
     *         required: true
     *     responses:
     *         200:
     *           description: Success
     */


      app.put("/api/department/update/:dep_id", controller.update);
    /**
    * @swagger
    *
    * /api/department/update/{dep_id}:
    *   put:
    *     description:
    *       - Use to  update head and assistant of department
    * 
    *     summary: Use to  update head and assistant of department
    * 
    *     tags:
    *       - Department Module
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
    
    *       - name: assistant_id
    *         in: formData
    *         type: integer
   
    *     responses:
    *         200:
    *           description: Success
    */
  


}