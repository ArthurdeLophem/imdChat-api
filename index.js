const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/imdChatRoutes');

const app = express();

app.use('/', routes);

app.use(express.json());

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})