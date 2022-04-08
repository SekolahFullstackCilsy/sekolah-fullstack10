import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getTodoById, updateTodo } from "../../store/actions/todo";
import { userData } from "../../store/constants";

const TodoEdit = () => {
  const dispatch = useDispatch();
  const { todo } = useSelector((state) => state.todo);
  const history = useHistory();
  const { id } = useParams();
  const [state, setState] = useState({
    name: "",
    description: "",
    user_id: userData.user_id,
  });

  useEffect(() => {
    dispatch(getTodoById(id));
  }, [id]);

  useEffect(() => {
    if (!state.name) {
      setState(todo);
    }
  }, [todo]);

  const handleFormChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdateTodo = () => {
    dispatch(updateTodo(state));

    alert("Todo Succesfully Updated");
    history.push("/todo");
  };

  return (
    <>
      <h2>Edit Todo</h2>
      <form onSubmit={handleUpdateTodo}>
        <div>
          <label htmlFor="">Name</label>
          <input
            type="text"
            placeholder="name"
            name="name"
            value={state.name}
            onChange={(e) => handleFormChange(e)}
          />
        </div>
        <div>
          <label htmlFor="">Description</label>
          <input
            type="text"
            placeholder="description"
            name="description"
            value={state.description}
            onChange={(e) => handleFormChange(e)}
          />
        </div>
        <div>
          <button type="submit">Edit Todo</button>
        </div>
      </form>
    </>
  );
};

export default TodoEdit;
