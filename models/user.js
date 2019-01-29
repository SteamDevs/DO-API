const db = require('../config/database');

let users = {};

users.allUsers = (data, callback)=>{
    if(db){
        let sql = `SELECT * FROM bgt_users`
        db.query(sql, data, (err, results )=>{
            if (err) throw errr;
            callback(results)
        })
    }
}

module.exports = users;