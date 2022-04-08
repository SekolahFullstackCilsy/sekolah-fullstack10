import axios from "axios";
import {
  ADD_TODO,
  API_URL,
  DELETE_TODO,
  GET_TODO,
  GET_TODOS,
  UPDATE_TODO,
  userData,
} from "../constants";

export const getTodos = () => {
  return (dispatch) => {
    axios
      .get(`${API_URL}/todo`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userData.access_token}`,
        },
      })
      .then((res) => {
        dispatch({
          type: GET_TODOS,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const createTodo = (data) => {
  return (dispatch) => {
    axios
      .post(`${API_URL}/todo`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userData.access_token}`,
        },
      })
      .then((res) => {
        dispatch({
          type: ADD_TODO,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteTodo = (id) => {
  return (dispatch) => {
    axios
      .delete(`${API_URL}/todo/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userData.access_token}`,
        },
      })
      .then((res) => {
        dispatch({
          type: DELETE_TODO,
        });

        dispatch(getTodos());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getTodoById = (id) => {
  return (dispatch) => {
    axios
      .get(`${API_URL}/todo/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userData.access_token}`,
        },
      })
      .then((res) => {
        dispatch({
          type: GET_TODO,
          payload: res.data.data,
        });

        return res.data.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const updateTodo = (data) => {
  return (dispatch) => {
    axios
      .patch(`${API_URL}/todo`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userData.access_token}`,
        },
      })
      .then((res) => {
        dispatch({
          type: UPDATE_TODO,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
