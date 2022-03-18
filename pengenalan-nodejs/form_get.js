const http = require('http')
const url = require('url')
const fs = require('fs')

const server = http.createServer(function (req, res) {
  const q = url.parse(req.url, true)
  
  if (q.pathname === "/search" && req.method === "GET") {
    const keyword = q.query.keyword
    if (keyword) {
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write("<h3>Search Result :</h3>")
      res.write(`<p>Anda mencari keyword : <b>${keyword}</b></p>`)
      res.end(`Balik ke <a href="/search">Search</a>`)
    } else {
      // nampilin form html
      fs.readFile('search.html', (err, data) => {
        if (err) {
          res.writeHead(404, { 'Content-Type': 'text/html' })
          res.end("404 not found")
        }

        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(data)
        res.end()
      })
    }
  }
})

server.listen(8000)

console.log(`server is running on port 8000`)