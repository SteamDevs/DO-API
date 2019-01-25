const myslq = require('mysql')

let params = {
   host      : '157.230.189.189',
   user      : 'root',
  password   : 'developer',
  database   : 'digi'
}

let cnn = myslq.createPool(params);

module.exports = cnn;