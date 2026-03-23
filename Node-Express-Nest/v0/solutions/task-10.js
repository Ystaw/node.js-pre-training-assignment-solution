// Express.js GET /todos/search endpoint with query params
// TODO: implement

const express = require('express');
const app = express();

app.get('/todos/search', (req, res) => {
    const { completed } = req.query;
    if (completed === undefined) {
        return res.json(todos);
    }
    const isCompleted = completed === 'true';
    const filteredTodos = todos.filter(todo => todo.completed === isCompleted);
    res.json(filteredTodos);
})

module.exports = app; 