import React from 'react'
import { Link } from 'react-router-dom'

function Product({history}) {
  const users = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Steven'},
    {id: 3, name: 'Max'},
  ]

  const toAbout = (id) => {
    history.push(`/about/${id}`)
  }

  return (
    <div>
      {users.map((val, key) => (
        // <h1 key={key} onClick={() => toAbout(val.id)}>{val.name}</h1>
        <Link to={`/about/${val.id}`}><h1 key={key}>{val.name}</h1></Link>
      ))}
    </div>
  )
}

export default Product