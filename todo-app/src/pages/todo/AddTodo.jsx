import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Layout from '../../components/Layout'
import { addTodo } from '../../redux/todo/todoActions';

function AddTodo() {
   const history = useHistory();
   const dispatch = useDispatch();

   const [form, setForm] = useState({
      name: "",
      description: ""
   })

   const onChangeField = (e) => {
      setForm({
         ...form,
         [e.target.name]: e.target.value
      });
   }

   const onSubmit = (e) => {
      e.preventDefault();

      dispatch(addTodo(form));
      history.push("/todo");
   }

   return (
      <Layout>
         <Form onSubmit={onSubmit}>
            <Form.Group>
               <Form.Label>Todo Name</Form.Label>
               <Form.Control
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={onChangeField}
               />
            </Form.Group>
            <Form.Group>
               <Form.Label>Description</Form.Label>
               <Form.Control
                  as="textarea"
                  name="description"
                  value={form.description}
                  onChange={onChangeField}
               />
            </Form.Group>
            <Button type="submit" className="w-100 d-block" size="lg">
               Tambah
            </Button>
         </Form>
      </Layout>
   )
}

export default AddTodo;