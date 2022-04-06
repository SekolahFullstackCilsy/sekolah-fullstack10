const express = require('express')
const cors = require('cors')
const app = express()
const port = 8000
const { sequelize } = require('./database/models')

const authRouter = require('./routes/auth')
const todoRouter = require('./routes/todo')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

sequelize.authenticate().then(() => {
  console.log(`Success connecting database`)                   
})

app.use('/auth', authRouter)
app.use('/todo', todoRouter)

app.use((error, req, res, next) => {                         
  return res.status(400).json({
    status: 'error',
    code: 400,
    message: 'Bad request',
    error: error.message
  })
})

app.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})