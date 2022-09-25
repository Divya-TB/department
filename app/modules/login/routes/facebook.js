module.exports = app => {

    const passport = require('passport')
 const controller = require('../controller/controller.geocoder')

 app.get('/api/auth/gmail/login', passport.authenticate('google', { scope: ['email','public_profile'] }));

 /**
 * @swagger
 *
 * /api/auth/gmail/login:
 *   get:
 *     description:
 *       - Use to login by gmail
 * 
 *     summary: Use to login by gmail
 * 
 *     tags:
 *        -  Login Module
 *     produces:
 *       - application/json
 *     consumes:
 *       - multipart/form-data
 * 
 *     responses:
 *         200:
 *           description:Success
 */





 // Api facebook call back function
 app.get('/api/callback/gmail', passport.authenticate('google',  {  failureRedirect: '/' }))
 /**
 * @swagger
 *
 * /api/callback/gmail:
 *   get:
 *     description:
 *       - Use to login by Facebook
 * 
 *     summary: use to get site after login
 * 
 *     tags:
 *        -  Login Module
 *     produces:
 *       - application/json
 *     consumes:
 *       - multipart/form-data
 * 
 *     responses:
 *         200:
 *           description:Success
 */








 // Api call for facebook authentication
 app.get('/api/auth/facebook/login', passport.authenticate('facebook', { scope: ['email','public_profile'] }));

 /**
 * @swagger
 *
 * /api/auth/facebook/login:
 *   get:
 *     description:
 *       - Use to login by Facebook
 * 
 *     summary: Use to login by Facebook
 * 
 *     tags:
 *        -  Login Module
 *     produces:
 *       - application/json
 *     consumes:
 *       - multipart/form-data
 * 
 *     responses:
 *         200:
 *           description:Success
 */





 // Api facebook call back function
 app.get('/api/callback/facebook', passport.authenticate('facebook',  {  failureRedirect: '/' }))
 /**
 * @swagger
 *
 * /api/callback/facebook:
 *   get:
 *     description:
 *       - Use to login by Facebook
 * 
 *     summary: use to get site after login
 * 
 *     tags:
 *        -  Login Module
 *     produces:
 *       - application/json
 *     consumes:
 *       - multipart/form-data
 * 
 *     responses:
 *         200:
 *           description:Success
 */



     app.post('/api/lat_lng', controller.geocoder);
      /**
    * @swagger
    *
    * /api/lat_lng:
    *   post:
    *     description:
    *       - Use to get lat and lng
    * 
    *     summary: Use to get lat and lng
    * 
    *     tags:
    *        - services Module
    * 
    *     produces:
    *       - application/json
    *
    * 
    *     parameters:
    *       - in: header
    *         name: Content-Type
    *         type: string
    *         value: application/x-www-form-urlencoded
    *         required: true
    * 
    *       - in: formData
    *         name: name
    *         type: string
    *         required: true
    * 
    *       - name: address
    *         in: formData
    *         type: string
    *         required: true
    * 
    *     responses:
    *         200:
    *           description: Success
    */


  

};