const Pool = require('pg').Pool
require('dotenv').config()

const pool = new Pool({
  user: 'postgres',
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.DBPORT,
  database: 'jotter'
})

module.exports = pool