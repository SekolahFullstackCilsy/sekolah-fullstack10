const http = require('http')
const fs = require('fs')
const qs = require('querystring')//baca data

const server = http.createServer(function (req, res) {
  if (req.url === '/login' && req.method === 'GET') {
    fs.readFile('login.html', (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/html' })
        res.end("404 not found")
      }

      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write(data)
      res.end()
    })
  }

  if (req.url === '/login' && req.method === 'POST') { 
    let requestBody = ''//data login
    req.on('data', (data) => { //event lisener. macam"hook" di react?
      requestBody += data
      console.log(requestBody)
    })

    req.on('end', () => {
      const formData = qs.parse(requestBody)
      console.log(formData)

      if (formData.username === 'john' && formData.password === 'john') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write("<h2>Selamat Datang</h2>")
        res.write(`<p>Username ${formData.username}</p>`)
        res.end(`Balik ke <a href="/login">login</a>`)
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write("<h2>Login Gagal</h2>")
        res.end(`<a href="/login">login ulang</a>`)
      }
    })
  }

  
 
})

server.listen(8000)

console.log(`server is running on port 8000`)