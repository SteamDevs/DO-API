const express = require('express')
const app = express()
const myslq = require('mysql')

//Init Routes
let userRoute = require('./routes/user')
let schoolRoute = require('./routes/schools')

app.get('/', function(req, res){

    res.send({
        message: 'hola esta es una prueba exitosa'
    })
})

app.get('/test', function(req, res){
    
    let config = {
        host            :  process.env.HOST || 'localhost',
        user            :  process.env.USER || 'root',
        password        :  process.env.PASS || 'developer',
        database        :  process.env.DB   || 'fxbus'
    }

    let cnn  = myslq.createConnection(config);

    if(cnn){

        return res.status(200).json({
            ok: true,
            message: 'conexion exitosa',
            results: cnn
        })

    }else{
       
        return res.send(400).json({
            message: 'conexion fallida',
            err: cnn
        })
    }

})


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

process.env.PORT = process.env.PORT || 1124;

app.use('/api/v1/users', userRoute)
app.use('/api/v1/schools', schoolRoute)

app.listen(process.env.PORT, ()=>{
    console.log(`
        Server on PORT : ${process.env.PORT} Online
    `)
})

