// backend/db.js
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',  // Change this
    password: '2216rnS030204.',  // Change this
    database: 'ecommerce_store',
});

db.connect((err) => {
    if (err) throw err;
    console.log('MySQL Connected');
});

module.exports = db;
