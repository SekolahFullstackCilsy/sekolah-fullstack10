const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 4000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: true }));

const homeRoute = require('./routes/home');
const produkRoute = require('./routes/produk');
const aboutRoute = require('./routes/about');
const contactRoute = require('./routes/contact');
const userRoute = require('./routes/user');

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