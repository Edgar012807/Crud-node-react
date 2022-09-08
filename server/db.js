const { Pool} = require('pg')


const pool = new  Pool({
    user:'edgar',
    host: 'localhost',
    password:'admin123',
    database:'cliente'
});

module.exports = {
    pool: pool
}