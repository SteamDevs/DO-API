const express = require('express')
const app = express()

//Init Routes
let schoolRoute = require('./routes/schools')

app.get('/', function(req, res){

    res.send({
        message: 'hola esta es una prueba exitosa'
    })
})

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

process.env.PORT = process.env.PORT || 1124;


app.use('/api/v1/schools', schoolRoute)

app.listen(process.env.PORT, ()=>{
    console.log(`
        Server on PORT : ${process.env.PORT} Online
    `)
})

