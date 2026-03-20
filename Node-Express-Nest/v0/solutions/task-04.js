// Express.js app with GET /todos/:id endpoint
const express = require('express');
const app = express();

app.get('/todos/:id', (req, res) => {
    const todos = [{ id: 1, title: 'Buy milk', completed: false }];
    const id = Number(req.params.id);
    const todo = todos.find(t => t.id === id);
    if (!todo) {
        res.status(404).send('Todo not found');
    }
    res.send(todo);
})
module.exports = app; 