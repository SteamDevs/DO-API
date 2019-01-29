const myslq = require('mysql')

let params = {
  host            : 'localhost',
  user            : 'root',
  password        : 'developer',
  database        : 'bgtdemo'
}

let cnn = myslq.createPool(params);

module.exports = cnn;