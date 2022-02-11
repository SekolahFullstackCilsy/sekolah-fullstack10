import React from 'react';

const AboutPage = ({history, match}) => {
  console.log(history)
  const users = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Steven'},
    {id: 3, name: 'Max'},
  ]

  const findUser = users.find((user) => user.id === +match.params.id)
  
  const toHome = () => {
    history.push('/')
  }

  return (
    <div>

      <h1>Ini Halaman {findUser && findUser.id} - {findUser && findUser.name}</h1>
      <button onClick={() => toHome()}>Back to home</button>
    </div>
  )
}

export default AboutPage