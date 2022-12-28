const express = require('express')
const app = express()
const port = 3000

// function(req, res) thay (req, res) =>
// get : được xem là router
app.get('/trang-chu', (req, res) => {
  var a = 1;
  var b = 2;
  var c = a + b;
  console.log(c);
  res.send('Hello World!')
})

// 127.0.0.1 - localhost

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// nodemon: giúp chạy pj mà không cần ctrl + c khi sửa 1 thứ nào đó để chạy lại từ đầu
// CTRL + C : exit