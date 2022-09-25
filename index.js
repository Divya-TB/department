const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const path = require("path");


const session = require('express-session');

const passport = require('passport');




app.use(bodyParser.json());







app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'SECRET'
}));

require('./app/modules/login/controller/facebook')(passport)

app.use(passport.initialize());


app.use(passport.session());


passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});
 





const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");




const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "project",
      version: "1.0.0",
      servers: ["http://localhost:3000"],
    },
  },
  apis: [
    "./app/modules/department/routes/department.routes.js",
    "./app/modules/sms/routes/department.routes.js",
    "./app/modules/login/routes/facebook.js",
    
  ],
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(bodyParser.urlencoded({ extended: true }));



app.use('/uploads', express.static(path.join(__dirname, '/uploads/images')))
// app.use('/uploads', express.static(path.join(__dirname, '/uploads/users')))
// app.use('/uploads', express.static(path.join(__dirname, '/uploads/pdfs')))


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to project" });
});




require("./app/modules/department/routes/department.routes.js")(app);
require("./app/modules/sms/routes/department.routes.js")(app);
require("./app/modules/login/routes/facebook.js")(app);

require('./app/modules/login/controller/facebook')(passport)


// set port, listen for requests
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
