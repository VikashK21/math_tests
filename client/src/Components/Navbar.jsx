import React from "react";
import { Container, NavLink } from "react-bootstrap";

function Navbar() {
  return (
    <>
      <nav className="active w-100">
        <Container
          fluid
          className="d-flex w-100 p-3 justify-content-between navbar bg-secondary text-white"
        >
          Navbar
          {/* <NavLink href="#home">
            <div>Home</div>
          </NavLink>
          <NavLink href="#faq">
            <div>Faq</div>
          </NavLink>
          <NavLink href="#about">
            <div>About</div>
          </NavLink>
          <NavLink href="#profile">
            <div>Profile</div>
          </NavLink> */}
        </Container>
      </nav>
    </>
  );
}

export default Navbar;
