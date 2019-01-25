const myslq = require('mysql')

let params = {
   host      : 'localhost',
   user      : 'root',
  password   : '',
  database   : 'digi'
}

let cnn = myslq.createPool(params);

module.exports = cnn;