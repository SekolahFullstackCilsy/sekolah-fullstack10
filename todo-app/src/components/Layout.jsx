import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Layout({ children }) {
   return (
      <div>
         <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
               <NavLink to={"/"} className="navbar-brand">
                  Todo APP
               </NavLink>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto">
                     <NavLink to="/login" className="nav-link">
                        Login
                     </NavLink>
                     <NavLink to="/register" className="nav-link">
                        Register
                     </NavLink>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
         <Container className="my-5">
            <Row>
               <Col>{children}</Col>
            </Row>
         </Container>
      </div>
   );
}

export default Layout;
