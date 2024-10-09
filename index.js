const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;


app.use(express.json());


app.post('/items', (req, res) => {
    const { name, description, price } = req.body;
    const query = 'INSERT INTO items (name, description, price) VALUES (?, ?, ?)';
    db.query(query, [name, description, price], (err, result) => {
        if (err) {
            console.error('Error insertando el item:', err);
            return res.status(500).send('Error al crear el item');
        }
        res.status(201).send({ id: result.insertId, name, description, price });
    });
});




app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
