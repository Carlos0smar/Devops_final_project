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


app.get('/items', (req, res) => {
    res.status(200).send(items);
});


app.get('/items/:id', (req, res) => {
    const item = items.find(i => i.id == req.params.id);
    if (!item) {
        return res.status(404).send('Item no encontrado');
    }
    res.status(200).send(item);
});


app.put('/items/:id', (req, res) => {
    const item = items.find(i => i.id == req.params.id);
    if (!item) {
        return res.status(404).send('Item no encontrado');
    }
    const { name, description, price } = req.body;
    item.name = name;
    item.description = description;
    item.price = price;
    res.status(200).send(item);
});


app.delete('/items/:id', (req, res) => {
    const index = items.findIndex(i => i.id == req.params.id);
    if (index === -1) {
        return res.status(404).send('Item no encontrado');
    }
    items.splice(index, 1);
    res.status(200).send('Item eliminado');
});

if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => {
        console.log(`Servidor escuchando en http://localhost:${port}`);
    });
}


module.exports = app;
