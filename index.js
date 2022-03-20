const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/imdChatRoutes');

mongoose.connect('mongodb://localhost:27017/imdchatapp', { useNewUrlParser: true });

const app = express();
app.use(express.json());

app.set('view engine', 'pug');
app.set('views', './views');
app.get('/', (req, res) => {
    res.render(index);
})

app.use('/api/v1/messages', router)

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})