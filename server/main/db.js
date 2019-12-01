const { Pool } = require('pg')

const pool = new Pool({
  user: 'seth',
  host: 'localhost',
  database: 'commerceapi',
  password: ''
})

module.exports = pool