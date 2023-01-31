const path = require("path");
const http = require("http");
const hostName = "127.0.0.1";
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const app = express();
const port = 3000;
const route = require("./routes");

// LOGO
app.use(express.static(path.join(__dirname, "public")));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// HTTP logger
app.use(morgan("combined"));

// Template engine
app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources\\views"));

// route init
route(app);
// console.log('PATH:', path.join(__dirname, 'resources/views'));

// 127.0.0.1 - localhost
// web server
app.listen(port, hostName, () => {
  console.log(`server is running at http://${hostName}:${port}`);
});
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// })
// nodemon: giúp chạy pj mà không cần ctrl + c khi sửa 1 thứ nào đó để chạy lại từ đầu
// CTRL + C : exit
