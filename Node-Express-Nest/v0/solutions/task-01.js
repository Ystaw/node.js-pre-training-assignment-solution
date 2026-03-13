// Express.js app with GET /todos endpoint
const express = require('express');
const app = express();

app.get('/todos', (req, res) => {
    const todos = [{ id: 1, title: 'Buy milk', completed: false }];
    res.send(todos);
})

module.exports = app; 