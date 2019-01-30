const express = require('express')
const app = express()

const modelSchool = require('../models/schools')

app.get('/', function(req, res){

    modelSchool.getAll( function (err, schoolDB){
        if(err){
            return res.status(400).json({
                ok: false,
                message: 'error DB',
                errors: err
            })
        }

        res.status(201).json({
            ok:true,
            message: 'consulta exitosa',
            schoolDB
        })
    })
})

app.get('/:id_school', function(req, res){

    let id_school = req.params.id_school;

    modelSchool.getOne(id_school, function(err, oneSchool){
        if(err){
            return res.status(400).json({
                ok: false,
                message: 'error DB',
                errors: err
            })
        }

        res.status(201).json({
            ok:true,
            message: 'consulta exitosa',
            oneSchool
        })
    })
})



module.exports = app