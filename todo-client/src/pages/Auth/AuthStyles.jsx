import styled from "styled-components";

const AuthStyled = styled.div`
  margin: 20px 0px;
`;

const TabStyled = styled.div`
  display: flex;
  justify-content: center;
`;

const Tab = styled.div`
  width: 200px;
  padding: 20px 40px;
  background: ${(props) => (props.active ? "#222" : "#f8cc06")};
  font-weight: bold;
  color: ${(props) => (props.active ? "#fff" : "#222")};
  font-size: 20px;
  cursor: pointer;
`;

const TabContent = styled.div`
  width: 480px;
  padding: 20px 40px;
  background: #222;
  font-weight: bold;
  color: #fff;

  form > * {
    margin: 2em;
  }
  label {
    display: block;
    position: relative;
  }

  input {
    border: none;
    border-bottom: 1px solid #f8cc06;
    font-size: 1em;
    outline: none;
    padding: 0.5em;
    width: 100%;
  }

  input + span {
    background: #fff;
    border-bottom: 1px solid #f8cc06;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    transition: all 0.125s ease;
  }

  input:focus ~ span {
    border: 0;
    font-size: 0.8em;
    top: -2em;
    z-index: -1;
  }

  input:focus {
    border-bottom: 2px solid #f8cc06;
    transition: all 0.125s linear;
  }
`;

const CartSummary = styled.div`
  background: #f8cc06;
  padding: 20px 40px;
  min-width: 250px;
  margin-left: 20px;
  margin-right: 20px;
`;

export { AuthStyled, TabStyled, Tab, CartSummary, TabContent };
