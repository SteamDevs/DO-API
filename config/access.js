const mysqlssh = require('mysql-ssh')

const hck = mysqlssh.connect(
   //Toda la configuracion
)

let cnn = hck

module.exports = cnn