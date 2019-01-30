const myslq = require('mysql')

let params = {
  host            :  process.env.HOST || 'localhost',
  user            :  process.env.USER || 'root',
  password        :  process.env.PASS || 'developer',
  database        :  process.env.DB   || 'fxbus'
}

let cnn = myslq.createPool(params);

module.exports = cnn;