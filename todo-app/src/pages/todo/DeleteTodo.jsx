import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import Layout from '../../components/Layout'
import { deleteTodo } from '../../redux/todo/todoActions';

function DeleteTodo(props) {
   const { id } = useParams();
   const history = useHistory();
   const { deleteTodo } = props;

   const onCancel = () => {
      history.goBack();
   }

   const onDelete = () => {
      deleteTodo(id);
      history.push('/todo');
   }

   return (
      <Layout>
         <Card>
            <Card.Body className="text-center">
               <p className="h5">Apakah anda yakin akan menghapus todo ini?</p>
            </Card.Body>
            <Card.Footer>
               <div className="text-end">
                  <Button variant="danger" onClick={onDelete}>
                     Hapus
                  </Button>
                  <Button onClick={onCancel}>
                     Tidak
                  </Button>
               </div>
            </Card.Footer>
         </Card>
      </Layout>
   )
}

const mapDispatchToProps = (dispatch) => ({
   deleteTodo: (id) => dispatch(deleteTodo(id))
});

export default connect(null, mapDispatchToProps)(DeleteTodo);