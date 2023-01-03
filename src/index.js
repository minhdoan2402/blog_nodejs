const path = require('path');
const http = require("http");
const hostName = "127.0.0.1";
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;

// LOGO
app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));

// console.log('PATH:', path.join(__dirname, 'resources/views'));
// function(req, res) thay (req, res) =>
// get : được xem là router
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/news', (req, res) => {
  res.render('news');
});

app.get('/favicon.ico', (req, res) => res.status(200));

// 127.0.0.1 - localhost

app.listen(port, hostName, () => {
  console.log(`server is running at http://${hostName}:${port}`);
});
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// })
// nodemon: giúp chạy pj mà không cần ctrl + c khi sửa 1 thứ nào đó để chạy lại từ đầu
// CTRL + C : exit