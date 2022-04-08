import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createTodo } from "../../store/actions/todo";
import { userData } from "../../store/constants";

const TodoAdd = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [state, setState] = useState({
    name: "",
    description: "",
    user_id: userData.user_id,
  });

  const handleFormChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddTodo = () => {
    dispatch(createTodo(state));

    alert("Todo Succesfully Added");
    history.push("/todo");
  };

  return (
    <>
      <h2>Add Todo</h2>
      <form onSubmit={handleAddTodo}>
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
          <button type="submit">Add Todo</button>
        </div>
      </form>
    </>
  );
};

export default TodoAdd;
