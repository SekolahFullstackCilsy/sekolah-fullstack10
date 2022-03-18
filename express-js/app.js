const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const port = 4000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

const produkRoute = require('./routes/produk');

app.use('/produk', produkRoute);

app.use('/', (req, res) => {
   res.status(404)
      .send('Not Found cuy');
});


app.listen(port, () => {
   console.log('Express di running!');
});