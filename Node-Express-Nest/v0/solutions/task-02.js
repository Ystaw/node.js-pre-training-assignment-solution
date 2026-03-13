// Express.js app with POST /todos endpoint
const express = require('express');
const app = express();

app.use(express.json());

let todos = [
    { id: 1, title: 'Buy milk', completed: false }
];

app.post('/todos', (req, res) => {
    const newTodo = [{
        id: todos.length + 1,
        title: req.body.title,
        completed: false
    }];
    todos.push(newTodo);

    res.json(newTodo);
})
module.exports = app; 