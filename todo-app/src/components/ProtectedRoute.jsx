import React from 'react'
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

function ProtectedRoute(props) {
   const isLogin = JSON.parse(localStorage.getItem('isLogin'));

   if (!isLogin) {
      return <Redirect to="/login" />
   }

   return (
      <Route {...props} />
   )
}

export default ProtectedRoute