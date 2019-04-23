const express = require('express');

const seedsRouter = ('./seeds/seeds-router.js');

const server = express();

server.use(express.json())

server.get('/', (req, res) => {
    res.send(`
    <h2>Lambda Seeds API<h2>
    `);
});

// server.use('/api/seeds', seedsRouter);

module.exports = server;