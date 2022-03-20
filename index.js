const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/imdChatRoutes');

mongoose.connect('mongodb://localhost:27017/imdchatapp', { useNewUrlParser: true });

const app = express();

app.use('/', router);

app.use(express.json());
app.use('/api/v1/messages', router)

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})