const myslq = require('mysql')

let params = {
  host            : 'localhost',
  user            : 'root',
  password        : 'developer',
  database        : 'fxbus'
}

let cnn = myslq.createPool(params);

module.exports = cnn;