const cnf = require('../config/access')

const getAll =  ( req, res )=>{

    cnf.then(client => {
        let sql = `SELECT * FROM bgt_schools`
        client.query(sql, (err, results)=> {
            if (err) throw err
            res.send({ data: results })    
        })
    })
    .catch(err => {
        console.log(err)
    })
}

const getOne = (id, callback )=>{

    cnf.then(client => {
        let sql = `SELECT * FROM bgt_schools WHERE id_school = ?`
        client.query(sql, id, (err, results)=> {
            if (err) throw err
            callback(null,results)  
        })
    })
    .catch(err => {
        console.log(err)
    })

}

const getUsersforSchools = (id, callback)=>{

    cnf.then(client => {
        let sql = `SELECT bgt_users.id_user as iduser, bgt_users.username as username, 
            bgt_users.fullname as fullname, bgt_users.password as password, bgt_users.status 
                as status, bgt_users.email as email
            FROM bgt_users, bgt_schools_users 
                WHERE bgt_users.id_user = bgt_schools_users.id_user AND bgt_schools_users.id_school = ?`

        client.query(sql, id, (err, results)=> {
            if (err) throw err
            callback(null,results)  
        })
    })
    .catch(err => {
        console.log(err)
    })
}

const getStudentsforSchool = (id, callback)=>{

    cnf.then(client => {
        let sql = `SELECT bgt_students.id_student as id_student, bgt_students.name as name, 
            bgt_students.photo as photo, bgt_students.id_user_parent 
                FROM bgt_students, bgt_schools_users 
            WHERE bgt_students.id_user_parent = bgt_schools_users.id_user AND bgt_schools_users.id_school= ?`

        client.query(sql, id, (err, results)=> {
            if (err) throw err
            callback(null,results)  
        })
    })
    .catch(err => {
        console.log(err)
    })
}

const getBusesforSchool = (id, callback)=>{

    cnf.then(client => {
        let sql = `SELECT id_bus, id_school, bgt_buses.name as nombre 
                FROM bgt_buses WHERE id_school = ?`

        client.query(sql, id, (err, results)=> {
            if (err) throw err
            callback(null,results)  
        })
    })
    .catch(err => {
        console.log(err)
    })

}



module.exports = {
    getAll, getOne,
    getUsersforSchools,
    getStudentsforSchool,
    getBusesforSchool
}