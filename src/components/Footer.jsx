import React from "react";
import { Row } from "react-bootstrap";
import "../styles.css";
function Footer() {
  return (
    <Row className="text-muted ls-2 d-flex justify-content-center mt-5">
      <p> © 2021 | Powered by </p>
      <a className="text-muted mx-2 text-decoration-none" href="/contact">
        <p> Team 3 </p>
      </a>
    </Row>
  );
}

export default Footer;
