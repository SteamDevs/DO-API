const express = require('express')
const app = express()

const modelUser = require('../models/user');

app.get('/',  function(req, res){

    modelUser.allUsers( function(err, userDB ){
            if(err){
                return res.status(400).json({
                    ok: false,
                    message: 'error de DB',
                    errors: err
                })
            }
            
            res.status(200).json({
                ok: true,
                message: 'Consulta Exitosa',
                results : userDB
            })
            
        })
})



module.exports = app