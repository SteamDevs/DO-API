const db = require('../config/database')

let schools = {
    getAll : (data, callback)=>{
        if(db){
            let sql = `SELECT * FROM bgt_schools`
            db.query(sql, data, (err, results)=>{
                if(err) throw err;
                callback(results)
            })
        }
    },

    getOne : (id, callback)=>{
        if(db){
            let sql = `SELECT * FROM bgt_schools WHERE id_school = ?`
            db.query(sql, id, (err, results)=>{
                if(err) throw err;
                callback(null, results)
            })
        }
    },

    getUsersforSchools : (id, callback)=>{
        if(db){
            let sql = `SELECT bgt_users.id_user as iduser, bgt_users.username as username, 
                bgt_users.fullname as fullname, bgt_users.password as password, bgt_users.status 
                as status, bgt_users.email as email FROM bgt_users, bgt_schools_users 
                    WHERE bgt_users.id_user = bgt_schools_users.id_user AND bgt_schools_users.id_school = ?`
            
            db.query(sql, id, (err, results)=>{
                if (err) throw err;
                callback(null, results )
            })        
        }
    },

    getStudentsforSchool : (id, callback)=>{
        if(db){
            let sql = `SELECT bgt_students.id_student as id_student, bgt_students.name as name, 
                bgt_students.photo as photo, bgt_students.id_user_parent 
                    FROM bgt_students, bgt_schools_users 
                WHERE bgt_students.id_user_parent = bgt_schools_users.id_user AND bgt_schools_users.id_school= ?`
            
            db.query(sql, id, (err,results)=>{
                if (err) throw err;
                callback(null, results)
            })    
        }
    }
}

module.exports = schools
