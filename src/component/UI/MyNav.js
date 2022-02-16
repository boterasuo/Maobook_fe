import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  NavDropdown,
  Container,
} from "react-bootstrap";

// scss
import "../../style/UI/global.scss";

// 要使用能有active css效果的NavLink元件
import { NavLink } from "react-router-dom";


function MyNav(props) {
  const { auth } = props;

  return (
    <>
      <Navbar expand="lg" fixed="top" className="navbar text-center">
        <Navbar.Brand href="/">
         MaoBook
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Container>
            <Nav className="me-auto px-4">
              {/* 連結各平台頁面 */}
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/schedule">Schedule</Nav.Link>
              <Nav.Link href="/store">Store</Nav.Link>
              <Nav.Link href="/community">Community</Nav.Link>
              <Nav.Link href="/assistance">Assistance</Nav.Link>
            </Nav>
          </Container>
          <Form className="d-flex">
            <div className="avatar bg-dark rounded-circle mx-2"></div>
            <NavDropdown>
              123
              <hr />
              456
              <hr />
              登出
            </NavDropdown>
            <div className="d-inline-block"></div>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default MyNav;
