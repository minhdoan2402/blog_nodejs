const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000

app.use(morgan('combined'))

// function(req, res) thay (req, res) =>
// get : được xem là router
app.get('/trang-chu', (req, res) => {
  res.send('Hello World!')
})

// 127.0.0.1 - localhost

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// nodemon: giúp chạy pj mà không cần ctrl + c khi sửa 1 thứ nào đó để chạy lại từ đầu
// CTRL + C : exit