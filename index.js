const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const router = require('./routes/imdChatRoutes');

mongoose.connect('mongodb://localhost:27017/imdchatapp', { useNewUrlParser: true });

const app = express();
app.use(express.json());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.get('/', (req, res) => {
    res.render("index", { p: router.get });
})
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/messages', router)

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});