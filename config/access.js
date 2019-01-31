const mysqlssh = require('mysql-ssh')

const hck = mysqlssh.connect(
    {
        host: '104.131.121.217',
        user: 'kevin',
        password: 'kevin@54321'
    },
    {
        host: 'localhost',
        user: 'root',
        password: 'root!123',
        database: 'bgt'
    }
)

let cnn = hck

module.exports = cnn