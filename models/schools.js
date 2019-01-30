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
    }
}

module.exports = schools
