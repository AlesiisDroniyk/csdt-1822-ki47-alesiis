const { createPool } = require("mysql");


const pool = createPool({
    host:'localhost',
    user:'root',
    password:'Alesis2001',
    database:'<MySQL>',
    connectionLimit:10
});

pool.connect((err) => {
    if(err){
        console.log('Error connecting to Db');
        return;
    }
    console.log('Connection established');
});

module.exports = pool;