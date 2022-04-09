import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button } from "../../components/button/Button";
import { deleteTodo, getTodoById, getTodos } from "../../store/actions/todo";
import { userData } from "../../store/constants";
import { TodosStyled } from "./TodosStyles";

const Todos = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todo);

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  const toTodoCreationPage = () => {
    history.push("/add-todo");
  };

  const handleEdit = (id) => {
    dispatch(getTodoById(id));
    history.push(`/edit-todo/${id}`);
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
    alert("Todo Deleted");
  };

  return (
    <>
      <h1>Todos</h1>
      <Button onClick={() => toTodoCreationPage()}>Add Todo</Button>
      <TodosStyled>
        {todos &&
          todos.map((todo, key) => (
            <div className="todo-item" key={key}>
              {todo.name}
              <br />
              <span>By: {todo.user.username}</span>

              {userData.user_id === todo.user_id && (
                <div className="todo-actions">
                  <button onClick={() => handleEdit(todo.id)}>Edit</button>
                  <button onClick={() => handleDelete(todo.id)}>Delete</button>
                </div>
              )}
            </div>
          ))}
      </TodosStyled>
    </>
  );
};

export default Todos;
