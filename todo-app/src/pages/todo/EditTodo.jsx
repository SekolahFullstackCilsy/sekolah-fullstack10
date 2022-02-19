import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { connect, useSelector, useDispatch } from 'react-redux'
import Layout from '../../components/Layout'
import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { updateTodo, findTodo } from '../../redux/todo/todoActions'


const Component = () => {
   const history = useHistory()
   const { id } = useParams()
   const [updateTodoData, setUpdateTodoData] = useState({
      name: '',
      description: ''
   });

   const dispatch = useDispatch();
   const { todo } = useSelector(state => state.todoReducer)

   // useSelector -> untuk mendapatkan state todo di redux
   // useDispatch -> untuk men-dispatch action pada todoActions;

   useEffect(() => {
      dispatch(findTodo(id))
   }, [dispatch, id])

   useEffect(() => {
      setUpdateTodoData(todo)
   }, [todo])

   const onBack = () => {
      history.push("/");
   }

   const onUpdate = () => {
      dispatch(updateTodo(updateTodoData))
      history.push('/')
   }

   const onChangeField = (e) => {
      setUpdateTodoData({
         ...updateTodoData,
         [e.target.name]: e.target.value
      })
   }

   return todo ? (
      <Layout>
         <Form>
            <Form.Group>
               <Form.Label>Name</Form.Label>
               <Form.Control
                  type="text"
                  name="name"
                  onChange={onChangeField}
                  value={updateTodoData.name}
               />
            </Form.Group>

            <Form.Group>
               <Form.Label>Description</Form.Label>
               <Form.Control
                  as="textarea"
                  rows={3}
                  name="description"
                  onChange={onChangeField}
                  value={updateTodoData.description}
               />
            </Form.Group>
            <Button
               className="mt-5 w-100 d-block"
               size="lg"
               onClick={onUpdate}
            >
               Update
            </Button>
         </Form>
      </Layout>
   ) : (
      <Layout>
         <p>Todo tidak ditemukan</p>
         <Button className="mt-4 d-block w-100" size="lg" onClick={onBack}>Kembali</Button>
      </Layout>
   )
}

// const mapStateToProps = (state) => ({
//    todo: state.todoReducer.todo
// })

// const mapDispatchToProps = (dispatch) => ({
//    getTodoById: (id) => dispatch(findTodo(id)),
//    updateTodo: (todo) => dispatch(updateTodo(todo))
// })

// const UpdateTodoPage =
//    connect(mapStateToProps, mapDispatchToProps)(Component)

export default Component;