import React from "react";
import { Nav, Navbar, Img } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from ".././img/logo.png";
import logogreen from ".././img/logo-green.png";
import neww from ".././img/new.png";
import orangee from ".././img/orange.png";

export default function NavBar(props) {
  const navItems = props.link
    .filter((item) => item.isLink)
    .map((item) => (
      <Nav.Link key={item.id}>
        <Link
          to={item.link}
          className="nav-link d-flex justify-content-end text-light fw-300 "
        >
          {" "}
          <b id="homepg">{item.title}</b>
        </Link>
      </Nav.Link>
    ));
  return (
    <Navbar expand="lg">
      <Link to="/">
        <img src={orangee} className="logo p-3" />
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav id="itemler" className="ml-auto pr-4 fs-18 ">
          {navItems}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
