import React, { useEffect } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import Layout from '../../components/Layout'
import { findTodo } from '../../redux/todo/todoActions'

const Component = () => {
   const dispatch = useDispatch();
   const history = useHistory()
   const { id } = useParams();
   const { todo } = useSelector(state => state.todoReducer);

   useEffect(() => {
      dispatch(findTodo(id));
   }, [dispatch, id])

   const onBack = () => {
      history.push('/')
   }

   return todo ? (
      <Layout>
         <Card className="text-center">
            <Card.Header>{todo.name}</Card.Header>
            <Card.Body>
               <blockquote className="blockquote mb-0">
                  <p>{todo.description}</p>
                  <footer className="blockquote-footer">
                     id <cite title="Source Tittle">{todo.id}</cite>
                  </footer>
               </blockquote>
               <Button className="mt-5" onClick={onBack}> Kembali</Button>
            </Card.Body>
         </Card>
      </Layout>
   ) : (
      <Layout>
         <p>Todo tidak ditemukan</p>
         <Button className="mt-4 d-block w-100" size="lg" onClick={onBack}>Kembali</Button>
      </Layout>
   )
}

export default Component;