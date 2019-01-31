const express = require('express')
const app = express()

const modelSchool = require('../models/schools')


//Declare Routes
app.get('/', modelSchool.getAll)

app.get('/:id',  function(req, res){

    let id = req.params.id;

    modelSchool.getOne( id, function(err, oneSchool){
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

app.get('/buses_school/:idz', function(req, res){

    let idz = req.params.idz;
    
    modelSchool.getBusesforSchool(idz, function(err, busesSchoolDB){
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
            busesSchoolDB
        })
    })


})


module.exports = app