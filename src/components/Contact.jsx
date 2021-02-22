import React from "react";
import contact from "../data/contact.json";
import { Card, Container, Row } from "react-bootstrap";
import "../styles.css";

function Contact() {
  const infoContact = contact.contact.map((item) => (
    <Card className="d-flex justify-content-center align-items-center col-sm  bg-none text-white my-5 border-0">
      <Card.Img variant="top" src={item.photo} className="rounded-circle " />
      <Card.Body className="justify-content-center align-items-center ">
        <Card.Title className="text-orange text-center fw-600 fs-23">
          {item.name}
          {item.lastname}
        </Card.Title>
        <Card.Title className="text-center fs-18 fw-200">
          {item.caption}
        </Card.Title>
        <Card.Text className="mt-5 ">
          <ul className="list-unstyled fw-200 ls-2">
            <li>
              {" "}
              📞
              {item.phonenum}
            </li>

            <li> 💻{item.github}</li>

            <li> 📧{item.email}</li>
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  ));
  return (
    <Container>
      <h1 className="text-white text-right mt-5 fs-75 fw-300 ls-5">
        CONTACT <span className="text-orange fw-600 "> USSS</span>{" "}
      </h1>
      <Row>
        <div className="d-flex justify-content-center  align-items-center">
          {infoContact}
        </div>
      </Row>
    </Container>
  );
}

export default Contact;
