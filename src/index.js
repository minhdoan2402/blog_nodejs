const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('handlebars', engine({ extname: '.hbs', defaultLayout: "main"}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources\\views'));
// console.log('PATH:', path.join(__dirname, 'resources/views'));
// function(req, res) thay (req, res) =>
// get : được xem là router
app.get('/', (req, res) => {
  res.render('home');
})

// 127.0.0.1 - localhost

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
// nodemon: giúp chạy pj mà không cần ctrl + c khi sửa 1 thứ nào đó để chạy lại từ đầu
// CTRL + C : exit