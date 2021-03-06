import axios from "axios";
import { API_URL, LOGIN_USER } from "../constants";

export const loginUser = (data) => {
  return (dispatch) => {
    axios
      .post(`${API_URL}/auth/login`, data)
      .then((res) => {
        dispatch({
          type: LOGIN_USER,
          payload: res.data.data,
        });
        window.localStorage.setItem("userData", JSON.stringify(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    window.localStorage.removeItem("userData");
  };
};
