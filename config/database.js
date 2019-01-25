const myslq = require('mysql')

let params = {
   host      : 'localhost',
   user      : 'root',
  password   : '',
  database   : 'dbdo'
}

let cnn = myslq.createPool(params);

module.exports = cnn;