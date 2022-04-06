import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../store/actions/auth';

const Login = () => {
  const dispatch = useDispatch()
  const [state, setState] = useState({
    username: '',
    password: ''
  });

  const handleFormChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
    console.log(state)
  }

  const handleLogin = (e) => {
    e.preventDefault()
    dispatch(loginUser(state))
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="">Username</label>
          <input type="text" placeholder='username' name="username" value={state.username} onChange={(e) => handleFormChange(e)} />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input type="text" placeholder='password' name="password" value={state.password} onChange={(e) => handleFormChange(e)} />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </>
  )
}

export default Login