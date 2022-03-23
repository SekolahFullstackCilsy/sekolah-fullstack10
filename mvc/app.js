const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const port = 8000

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: true }))

const productRoute = require('./routes/product')

app.use('/product', productRoute)

app.listen(port, () => {
  console.log('Server is running')
})