import React from "react";
import { Row, Image, Container } from "react-bootstrap";
import "../styles.css";
import about from "../data/about.json";
import logos from "../data/logo.js";

function About() {
  const aboutInfo = about.info.map((item, index) => (
    <>
      <Row>
        <h1 className="ls-5 text-white fw-400 fs-75">
          ABOUT <span className="fw-700 text-primary">BMI TRACKER</span>{" "}
        </h1>
      </Row>

      <Row>
        <p className="text-white mt-3">{item.content}</p>
      </Row>
    </>
  ));

  const features = about.info.map((item, index) => (
    <>
      <li key={index}>{item.features}</li>
    </>
  ));

  const logosInfo = logos.map((item, index) => (
    <Image className="logo" src={item} rounded />
  ));
  return (
    <>
      <Container className="mt-5">
        {aboutInfo}
        <Row className="d-flex flex-column mt-5">
          <h3 className="text-secondary">Features</h3>
          <ul className="text-white mt-3 list-unstyled">{features}</ul>
        </Row>
      </Container>
      <Container fluid>
        <p className="text-primary ls-5 text-center mt-5 fs-23 ">POWERED BY </p>
        <Row className="d-flex mt-5  justify-content-around">{logosInfo}</Row>
      </Container>
    </>
  );
}

export default About;
