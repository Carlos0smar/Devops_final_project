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

  

});
