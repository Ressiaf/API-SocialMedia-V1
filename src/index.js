// Modules
const express = require('express')
const app = express( )

const morgan = require('morgan')

// Routes import
const v1UsersRoute = require("./v1/routes/users.js")

//Configuration
app.set( "port" , process.env.PORT || 3000) 

// Middlewares
app
    .use( express.json() )
    .use( morgan("dev") )

// Routes
app
    .use("/api/v1/users" ,v1UsersRoute)


//Server
app.listen(app.get("port") , ( )  =>  {
    console.log( "server up in port" , app.get("port") );
})


