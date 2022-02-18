import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Layout from "../../components/Layout";

function Register() {
   // const { history } = useRouter()
   const history = useHistory();
   const [registerData, setRegisterData] = useState({
      username: '',
      password: ''
   })

   const onChangeField = (e) => {
      setRegisterData({
         ...registerData,
         [e.target.name]: e.target.value
      })
   }

   const onSubmit = (e) => {
      e.preventDefault()
      const users = JSON.parse(localStorage.getItem('users'))

      if (!users || users.length === 0) {
         localStorage.setItem(
            'users',
            JSON.stringify([registerData])
         )
      } else {
         localStorage.setItem(
            'users',
            JSON.stringify([...users, registerData])
         )
      }
      history.push('/login')
   }

   return (
      <Layout>
         <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3">
               <Form.Label>Name</Form.Label>
               <Form.Control type="text" name="username" value={registerData.username} onChange={onChangeField} />
            </Form.Group>
            <Form.Group>
               <Form.Label>Password</Form.Label>
               <Form.Control type="password" name="password" value={registerData.password} onChange={onChangeField} />
            </Form.Group>
            <Button className="mt-5 d-block w-100" size="lg" type="submit">
               Register
            </Button>
         </Form>
      </Layout>
   );
}

export default Register;
