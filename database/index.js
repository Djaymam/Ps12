const Pool = require("pg").Pool;
//const connect= process.env.DATABASE_URL

const pool = new Pool({
    //connect,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE
    
});

module.exports = pool;