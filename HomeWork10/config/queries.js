const Pool = require('pg').Pool;
const pool = new Pool({
      user: 'postgres',
      host: 'localhost',
      password: '1234',
      database: 'Restful',
      port: '5432'
});

module.exports = pool;