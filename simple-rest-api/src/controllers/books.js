const db = require('../models')
const Book = db.books

exports.create = (req, res) => {
  Book.create({
    title: req.body.title,
    description: req.body.description,
  }).then(() =>{
    res.status(201).json({
      status: 'Success',
      code: 201,
      message: 'Success Created Data'
    })
  }).catch(err => {
    res.status(500).json({
      status: 'Failed',
      code: 500,
      message: err
    })
  })
}

exports.findAll = (req, res) => {
  Book.findAll({}).then((data) =>{
    res.status(200).json({
      status: 'Success',
      code: 200,
      data: data,
      message: 'Success Fetching Data'
    })
  }).catch(err => {
    res.status(500).json({
      status: 'Failed',
      code: 500,
      message: err
    })
  })
}

exports.findOne = (req, res) => {
  const id = req.params.id

  Book.findByPk(id).then((data) =>{
    res.status(200).json({
      status: 'Success',
      code: 200,
      data: data,
      message: 'Success Fetching Data'
    })
  }).catch(err => {
    res.status(500).json({
      status: 'Failed',
      code: 500,
      message: err
    })
  })
}

exports.remove = (req, res) => {
  const id = req.params.id

  Book.destroy({
    where: {
      id
    }
  }).then(() =>{
    res.status(200).json({
      status: 'Success',
      code: 200,
      message: 'Success Delete Data'
    })
  }).catch(err => {
    res.status(500).json({
      status: 'Failed',
      code: 500,
      message: err
    })
  })
}

exports.update = (req, res) => {
  const id = req.params.id
  const body = req.body

  Book.update(body, {
    where: {
      id
    }
  }).then(() =>{
    res.status(200).json({
      status: 'Success',
      code: 200,
      message: 'Success Update Data'
    })
  }).catch(err => {
    res.status(500).json({
      status: 'Failed',
      code: 500,
      message: err
    })
  })
}