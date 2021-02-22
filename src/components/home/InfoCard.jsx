import React from "react";
import { Link } from "react-router-dom";
import "../../styles.css";
import {
  Button,
  Container,
  Card,
  ListGroup,
  Accordion,
  ToggleButton,
  Row,
  Col
} from "react-bootstrap";
// import { RestaurantRounded } from "@material-ui/icons";
// import BMIForm from "./BMIForm";

const InfoCard = ({ infos, deleteCard }) => {
  // const handleDelete = () => {
  //   deleteCard(infos.id);
  // };
  return (
    <>
      <Container className="d-flex flex-wrap col-md justify-content-center">
        {infos.map((info, index) => (
          <Card
            key={index}
            className="shadows border-25 mt-5 col-md-5 mx-4 col-sm-12 bg-lightgreen text-darkblue"
          >
            <Row>
              <Col>
                <div className="d-flex justify-content-between align-items-center fw-300">
                  <p className="mt-2">{info.date}</p>

                  <button
                    className="bg-lightgreen fs-23 fw-600"
                    onClick={() => {
                      deleteCard(info.id);
                    }}
                  >
                    X
                  </button>
                </div>
              </Col>
            </Row>
            <Row>
              <h2 className="mx-auto fw-600">YOUR INFORMATIONS</h2>
            </Row>

            <Row className="px-3 py-3 text-center ">
              <Col>
                <div className="d-flex align-items-center flex-column">
                  <p className="fw-300 text-darkblue ">Your weight </p>
                  <div className="d-flex align-items-center ">
                    <p className="fw-600 text-darkblue fs-50 mx-2">
                      {" "}
                      {info.weight}{" "}
                    </p>
                    <p className="fw-300 text-darkblue ">kg</p>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="d-flex align-items-center flex-column">
                  <p className="fw-300 text-darkblue ">Your height </p>
                  <div className="d-flex align-items-center ">
                    <p className="fw-600 text-darkblue fs-50 mx-2">
                      {" "}
                      {info.height}{" "}
                    </p>
                    <p className="fw-300 text-darkblue ">cm</p>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="d-flex align-items-center flex-column">
                  <p className="fw-300 text-darkblue ">Your BMI </p>
                  <div className="d-flex align-items-center ">
                    <p className="fw-600 text-darkblue fs-50 mx-2">
                      {" "}
                      {info.bmi}{" "}
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="px-5 ">
              <p className=" mx-auto text-secondary fw-700 fs-25 ls-5">
                {info.bmi < 18.5
                  ? " UNDERWEIGHT"
                  : info.bmi > 18.5 && info.bmi < 25
                  ? `NORMAL`
                  : info.bmi >= 25 && info.bmi < 30
                  ? " OVERWEIGHT"
                  : info.bmi >= 30
                  ? " OBESE"
                  : "I couldnt find your bmi range"}
              </p>
            </Row>
            <Row className="mx-auto col-md-12 ">
              <Col className="bg-gray p-2 border-25 mb-3 text-center fs-18 fw-600 ">
                <Link
                  to={
                    info.bmi < 18.5
                      ? "/underweight"
                      : info.bmi > 18.5 && info.bmi < 25
                      ? "/normal"
                      : info.bmi >= 25 && info.bmi < 30
                      ? "/overweight"
                      : info.bmi >= 30
                      ? "/obese"
                      : "/404"
                  }
                  className="text-darkblue text-decoration-none"
                >
                  RECOMMENDED DIET LIST FOR YOU
                </Link>
              </Col>
            </Row>
          </Card>
          // {/* <button
          //         className="col-md"
          //         onClick={() => {
          //           deleteCard(info.id);
          //         }}
          //       >
          //         X
          //       </button> */}

          // {/* <div className="d-flex">
          //   <ListGroup className="col-md-10">
          //     <ListGroup.Item>Your weight: {info.weight} kg</ListGroup.Item>
          //     <ListGroup.Item>Your height: {info.height}cm</ListGroup.Item>
          //     <ListGroup.Item>Your BMI:{info.bmi} </ListGroup.Item>
          //   </ListGroup>
          //   <ListGroup c lassName="col-md-2">
          //     <ListGroup.Item>
          //       {info.bmi < 18.5
          //         ? " UNDERWEIGHT"
          //         : info.bmi > 18.5 && info.bmi < 25
          //         ? `NORMAL`
          //         : info.bmi >= 25 && info.bmi < 30
          //         ? " OVERWEIGHT"
          //         : info.bmi >= 30
          //         ? " OBESE"
          //         : "I couldnt find your bmi range"}{" "}
          //     </ListGroup.Item>
          //   </ListGroup> */}
          // {/* </div> */}
        ))}
      </Container>
    </>
  );
};

export default InfoCard;
