import styled from "styled-components";

const NavbarStyled = styled.div`
  background: #003366;
  ul {
    display: flex;
    list-style-type: none;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 700px;
  }

  li {
    padding: 1rem 2rem;
    color: white;
    text-transform: uppercase;
  }

  li:hover {
    background: #0099ff;
  }

  li a {
    color: white;
    text-decoration: none;
  }

  li a span {
    border-radius: 100px;
    background: red;
    color: white;
    padding: 4px 10px;
    margin-left: 5px;
  }
`;

export { NavbarStyled };
