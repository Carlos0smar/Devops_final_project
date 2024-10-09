const request = require('supertest');
const express = require('express');


const app = require('./index'); 


let items = [];


describe('CRUD API', () => {

  it('debería crear un nuevo item', async () => {
    const response = await request(app)
      .post('/items')
      .send({ name: 'Item 1', description: 'Descripción 1', price: 100 });
    expect(response.statusCode).toBe(201);
    expect(response.body.name).toBe('Item 1');
  });

  
  it('debería obtener todos los items', async () => {
    const response = await request(app).get('/items');
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBe(1);
  });

  
  it('debería obtener un item por ID', async () => {
    const response = await request(app).get('/items/1');
    expect(response.statusCode).toBe(200);
    expect(response.body.name).toBe('Item 1');
  });

  
  it('debería actualizar un item existente', async () => {
    const response = await request(app)
      .put('/items/1')
      .send({ name: 'Item 1 actualizado', description: 'Descripción actualizada', price: 150 });
    expect(response.statusCode).toBe(200);
    expect(response.body.name).toBe('Item 1 actualizado');
  });

  
  it('debería eliminar un item existente', async () => {
    const response = await request(app).delete('/items/1');
    expect(response.statusCode).toBe(200);
  });
});
