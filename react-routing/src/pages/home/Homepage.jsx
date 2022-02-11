import React from 'react';

const Homepage = ({history}) => {
  return (
    <div>
    <h1>Ini Halaman Home</h1>
    <button onClick={() => history.goBack()}>Back</button>

    </div>
  )
}

export default Homepage