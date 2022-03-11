console.log('Hello World')

const http = require('http')
const url = require('url')
// const salam = require('./hello')

const server = http.createServer((req, res) => {
  // res.end("Hello ini NodeJS")
  // application/json
  // application/pdf
  // application/xml
  res.writeHead(200, { 'Content-Type': 'application/json' })
  // res.write('{"data": [{"id":1, "name": "john"}],"message": "hello Nodejs"}')
  // res.write(`URL Param: ${req.url}`)
  // switch (req.url) {
  //   case '/about':
  //     res.write(`Ini About`)
  //     break;
  //   case '/profile':
  //     res.write(`Ini Profile`)
  //     break;
  //   default:
  //     break;
  // }
  const q = url.parse(req.url, true).query
  console.log(q)
  res.write(`${q.keyword}`)
  res.write(`Keyword nya: ${q.keyword}`)
  res.end()
})

server.listen(8000)

console.log(`Server runing on port 8000`)