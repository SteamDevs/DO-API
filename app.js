const express = require('express')
const app = express()

//Init Routes
let userRoute = require('./routes/user')

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

process.env.PORT = process.env.PORT || 3000;

app.use('/api/v1/users', userRoute)

app.listen(process.env.PORT, ()=>{
    console.log(`
        Server on PORT : ${process.env.PORT} Online
    `)
})

