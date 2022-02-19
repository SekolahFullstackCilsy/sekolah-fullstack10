import React, { useEffect } from 'react'
import Layout from '../../components/Layout'
import { connect } from 'react-redux';
import { getTodo } from '../../redux/todo/todoActions';
import { ArrowsFullscreen, PencilSquare, Trash } from 'react-bootstrap-icons';
import { Button, Col, ListGroup, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function Todo(props) {
   const { getTodo, todos } = props;
   const history = useHistory();

   if (todos && todos.length > 0) {
      return (
         <Layout>
            <ListGroup className="mb-5">
               {todos.map(todo => (
                  <ListGroup.Item key={todo.id}>
                     <Row>
                        <Col sm={10}>
                           <p className="h5">{todo.name}</p>
                        </Col>
                        <Col sm={2}>
                           <Button
                              variant="link"
                              onClick={() => history.push(`/todo/edit/${todo.id}`)}
                              className="p-2"
                           >
                              <PencilSquare
                                 size={23}
                                 color="royalblue"
                              />
                           </Button>
                           <Button
                              variant="link"
                              onClick={() => history.push(`/todo/detail/${todo.id}`)}
                              className="p-2"
                           >
                              <ArrowsFullscreen
                                 size={23}
                                 color="royalblue"
                              />
                           </Button>
                           <Button
                              variant="link"
                              onClick={() => history.push(`/todo/delete/${todo.id}`)}
                              className="p-2"
                           >
                              <Trash
                                 size={23}
                                 color="royalblue"
                              />
                           </Button>
                        </Col>
                     </Row>
                  </ListGroup.Item>
               ))}
            </ListGroup>
            <Button className="w-100 d-block button-saya" size="lg" onClick={() => history.push('/todo/add')}>
               Tambah Todo
            </Button>
         </Layout>
      )
   }

   return (
      <Layout>
         <p className="h5 mb-5">List todo masih kosong</p>
         <Button onClick={getTodo} className="w-100 d-block" size="lg">
            Get Todo
         </Button>
      </Layout>
   )
}

const mapStateToProps = (state) => {
   return {
      todos: state.todoReducer.todos, // penampung list
      todo: state.todoReducer.todo // penampung single data todo
   };
}

const mapDispatchToProps = (dispatch) => ({
   getTodo: () => dispatch(getTodo())
})

const ListToDoPage = connect(mapStateToProps, mapDispatchToProps)(Todo)
export default ListToDoPage