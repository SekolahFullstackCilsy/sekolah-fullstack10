const http = require('http')
const fs = require('fs')
const qs = require('querystring')//baca data

const server = http.createServer(function (req, res) {
  if (req.url === '/' && req.method === 'GET') {
    fs.readFile('index.html', (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/html' })
        res.end("404 not found")
      }

      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write(data)
      res.end()
    })
  }

  if (req.url === '/users' && req.method === 'GET') {
    fs.readFile('users.html', (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/html' })
        res.end("404 not found")
      }

      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write(data)
      res.end()
    })
  }

  if (req.url === '/create-user' && req.method === 'POST') { 
    let requestBody = ''//data login
    req.on('data', (data) => { //event lisener. macam"hook" di react?
      requestBody += data
      console.log(requestBody)
    })

    req.on('end', () => {
      const formData = qs.parse(requestBody)

      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write("<h2>Selamat Datang</h2>")
      res.write(`<p>Username ${formData.username}</p>`)
      res.end(`Balik ke <a href="/users">users</a>`)
    })
  }

})

server.listen(4000)

console.log(`server is running on port 4000`)