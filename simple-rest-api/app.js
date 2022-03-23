const express = require('express');
const app = express()
const port = 8000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use((req, res, next) => {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
 next();
})

// db
const db = require('./src/models')
db.sequelize.sync({ force: false }).then(() => {
  console.log('resync db')
})

// routes
const userRouter = require('./src/routes/users')
const bookRouter = require('./src/routes/books')

app.use('/users', userRouter)
app.use('/books', bookRouter)

// /users
//router.get('/list', product.getProductList);


app.listen(port, () => {
  console.log('Server is running')
})