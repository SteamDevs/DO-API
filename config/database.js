const myslq = require('mysql')

let params = {
  host            :  process.env.HOST || 'localhost',
  user            :  process.env.USER || 'root',
  password        :  process.env.PASS || '',
  database        :  process.env.DB   || 'bgt'
}

let cnn = myslq.createPool(params);

module.exports = cnn;