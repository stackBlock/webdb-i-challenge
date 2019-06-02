const express = require('express');
const apiRoute = require('./routes/api/index.js');
const server = express();
server.use(express.json());


server.get('/', (req, res) => {
    res.send(`
    <h1> working </h1>
    `);
});

server.use('/api', apiRoute);

// your code here

module.exports = server;