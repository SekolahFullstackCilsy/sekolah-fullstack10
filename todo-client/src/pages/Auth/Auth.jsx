import React, { useState } from "react";
import { AuthStyled, TabStyled, Tab, TabContent } from "./AuthStyles";
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/actions/auth";
import { useHistory } from "react-router-dom";

const Auth = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [tab, setTab] = useState(0);
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleFormChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(state));
    history.push("/todo");
  };

  const handleTab = (tabIndex) => setTab(tabIndex);

  return (
    <AuthStyled>
      <TabStyled>
        {tab === 0 ? (
          <Tab onClick={() => handleTab(0)} active>
            Sign Up
          </Tab>
        ) : (
          <Tab onClick={() => handleTab(0)}>Sign Up</Tab>
        )}
        {tab === 1 ? (
          <Tab onClick={() => handleTab(1)} active>
            Log In
          </Tab>
        ) : (
          <Tab onClick={() => handleTab(1)}>Log In</Tab>
        )}
      </TabStyled>
      <TabStyled>
        {tab === 0 ? (
          <TabContent>
            <h2>Sign Up</h2>
          </TabContent>
        ) : (
          <TabContent>
            <h2>Log In</h2>
            <form onSubmit={handleLogin}>
              <div>
                <label htmlFor="">Username</label>
                <input
                  type="text"
                  placeholder="username"
                  name="username"
                  value={state.username}
                  onChange={(e) => handleFormChange(e)}
                />
              </div>
              <div>
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  value={state.password}
                  onChange={(e) => handleFormChange(e)}
                />
              </div>
              <div>
                <button type="submit">Login</button>
              </div>
            </form>
          </TabContent>
        )}
      </TabStyled>
    </AuthStyled>
  );
};

export default Auth;
