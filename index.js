const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',  
    password: '',
    database: 'devops_crud'
});

db.connect(err => {
    if (err) {
        console.error('Error conectando a la base de datos:', err);
        return;
    }
    console.log('Conectado a la base de datos MySQL');
});


app.use(express.json());

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
