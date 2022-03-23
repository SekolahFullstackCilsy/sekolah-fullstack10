
exports.getAll = (req, res) => {
  const users = [
    {id: 1, name: 'john'},
    {id: 2, name: 'steve'},
    {id: 3, name: 'mark'},
  ]
  
  return res.status(200).json({
    status: 'Success',
    code: 200,
    data: users,
    message: 'Success Fetching Data'
  })
}

exports.createUser = (req, res) => {
  const name = req.body.name
  // fungsi create data

  res.status(201).json({
    status: 'Success',
    code: 201,
    data: {name},
    message: 'Success Created Data'
  })
}