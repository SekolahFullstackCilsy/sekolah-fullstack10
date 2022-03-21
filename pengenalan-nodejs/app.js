const http = require('http');
const fs = require('fs');
const qs = require('querystring');

const server = http.createServer((request, response) => {
   const req = request.url
   if (request.method === "GET") {
      if (request.url === "/") {
         fs.readFile('./pages/home.html', (err, data) => {
            if (err) {
               return response.end('file tidak bisa load');
            }

            response.writeHead(200, {
               'Content-type': 'text/html'
            });
            response.write(data);
            return response.end();
         });
      }

      if (request.url === "/contact") {
         fs.readFile('./pages/contact.html', (error, data) => {
            if (error) {
               return response.end('file tidak bisa load');
            }

            response.writeHead(200, {
               'Content-type': 'text/html'
            });
            response.write(data);
            return response.end();
         });
      }

      if (request.url === "/product") {
         fs.readFile('./pages/product.html', (err, data) => {
            if (err) {
               return response.end('file tidak bisa load');
            }

            response.writeHead(200, {
               'Content-type': 'text/html'
            });
            response.write(data);
            return response.end();
         });
      }

      if (request.url === "/test") {
         return response.end("test");
      }
   }

   if (request.method === "POST") {
      if (request.url === "/kirim") {
         let formData = "";
         request.on("data", (data) => {
            formData += data;
         });

         return request.on('end', () => {
            const dataForm = qs.parse(formData);
            console.log(response);
            return response.end(dataForm.email);
         })
      }
   }

});

server.listen(8080)