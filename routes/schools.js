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

app.get('/us_list/:idx', function(req, res){

    let idx = req.params.idx;

 
    modelSchool.getUsersforSchools(idx, function(err, usersShcoolDB){
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
            usersShcoolDB
        })
    })
})

app.get('/students_school/:idy', function(req, res){

    let idy = req.params.idy;

    modelSchool.getStudentsforSchool(idy, function(err, studentsSchoolDB){
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
            studentsSchoolDB
        })
    })
})



module.exports = app