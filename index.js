const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let items = [];
let nextId = 1;


app.post('/items', (req, res) => {
    const { name, description, price } = req.body;
    const newItem = { id: nextId++, name, description, price };
    items.push(newItem);
    res.status(201).send(newItem);
});



if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => {
        console.log(`Servidor escuchando en http://localhost:${port}`);
    });
}


module.exports = app;
