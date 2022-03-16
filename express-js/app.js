const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 4000;

app.use(bodyParser.urlencoded({ extended: true }));

// middleware 1
// app.use((request, response, next) => {
//    response.json({
//       username: 'angga',
//       email: 'angganix@gmail.com'
//    });
//    next();
// });

// // middleware 2
// app.use((request, response, next) => {
//    response.send('middleware 2');
// });

// Request Method 
// GET, POST, PUT, DELETE

const homeRoute = require('./routes/home');
const produkRoute = require('./routes/produk');
const aboutRoute = require('./routes/about');
const contactRoute = require('./routes/contact');
const userRoute = require('./routes/user');

// app.use((req, res, next) => {
//    req.apaja = {
//       fullname: 'Angga',
//       email: 'angganix@gmail.com',
//       role: 'user'
//    };
//    // role access
//    next();
// });

// route group / parent route
app.use('/', homeRoute);
app.use('/produk', produkRoute);
app.use('/contact', contactRoute)
app.use('/about', aboutRoute)
app.use('/user', userRoute)

app.use('/', (req, res) => {
   res.status(404)
      .send('Not Found cuy');
});


app.listen(port, () => {
   console.log('Express di running!');
});