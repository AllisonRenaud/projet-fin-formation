const {Pool} = require('pg');

const config = {
    connectionString: process.env.DATABASE_URL
};


config.ssl = {
    rejectUnauthorized: false
}

const pool = new Pool(config);

pool.query('SELECT NOW()')
.then(data => console.log("postgres database connected"))
.catch(err => console.log(err))

module.exports = pool;
