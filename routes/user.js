const express = require('express')
const app = express()

const modelUser = require('../models/user');

app.get('/',  async(req, res)=>{

    let result

   try {

        result = await modelUser.allUsers( (err, userDB )=>{
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
       
   } catch (e) {
        console.log(`Se genero un error`)
   }

})



module.exports = app