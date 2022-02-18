import React, { useState } from 'react'
import Layout from '../../components/Layout'
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

function Login() {
   // const { history } = useRouter()
   const history = useHistory()
   const [loginData, setLoginData] = useState({
      username: '',
      password: ''
   })

   const onChangeField = (e) => {
      setLoginData({
         ...loginData,
         [e.target.name]: e.target.value
      })
   }

   const onSubmit = (e) => {
      e.preventDefault()
      const users = JSON.parse(localStorage.getItem('users'))

      // jika data users'nya belum ada
      if (!users || users.length === 0) {
         alert("Belum login");
      } else {
         // cocokan user data di localStorage
         // dengan data username password di state loginData
         const findUser = users.find(user => {
            return user.username === loginData.username && user.password === loginData.password
         });

         // kalau tidak cocok
         // tampilkan alert error
         if (!findUser) {
            alert("Username atau password salah!");
         } else {
            // kalau cocok redirect ke halaman home
            // dan simpan flag isLogin pada localStorage
            localStorage.setItem('isLogin', JSON.stringify(true));
            history.push("/");
         }
      }
   }

   return (
      <Layout>
         <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3">
               <Form.Label>Name</Form.Label>
               <Form.Control type="text" name="username" value={loginData.username} onChange={onChangeField} />
            </Form.Group>
            <Form.Group>
               <Form.Label>Password</Form.Label>
               <Form.Control type="password" name="password" value={loginData.password} onChange={onChangeField} />
            </Form.Group>
            <Button className="mt-5 d-block w-100" size="lg" type="submit">
               Login
            </Button>
         </Form>
      </Layout>
   );
}

export default Login