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
    }

    //others funcions
}

module.exports = schools
