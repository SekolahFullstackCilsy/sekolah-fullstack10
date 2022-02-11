import { Redirect, Route } from "react-router-dom"

const PrivateRoute = (props) => {
  console.log(props)
  const isLogin = false;
  return isLogin ? (
    <Route {...props} />
  ) : (
    <Redirect to="/404" />
  )
}

export default PrivateRoute