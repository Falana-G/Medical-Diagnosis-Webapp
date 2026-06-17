const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Harkeerat@20',
    database: 'nodejs'
})

connection.connect((err) => {
    if(err){
        console.error(err);
    }else{
        console.log('Connected to Mysql');
    }
})

module.exports = connection;