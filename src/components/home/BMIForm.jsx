import "../../styles.css";
import PropTypes from "prop-types";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Form, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const initialValues = {
  weight: "",
  height: "",
  date: ""
};
const BMIForm = ({ change }) => {
  const [state, setState] = useState(initialValues);

  const handleChange = (e) => {
    let { value, name } = e.target;
    if (value > 999) {
      value = 999;
    }
    let date = new Date().toLocaleString().split(",")[0];
    setState({
      ...state,
      [name]: value,
      date
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    change(state);
    setState(initialValues);
    console.log(`handlesubmiti aldim`);
  };

  return (
    <>
      <Container >
        <h1 className="text-white text-center mt-5">BMI Tracker</h1>
        <Form className="mt-5">
          <Row className="d-flex justify-content-center">
            <Col>
              <Form.Group controlId="formBasicEmail">
                <Form.Label className="text-white">Your weight</Form.Label>
                <Form.Control
                  className="rounded-pill"
                  name="weight"
                  type="number"
                  min="1"
                  max="999"
                  value={state.weight}
                  placeholder="75"
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formBasicEmail">
                <Form.Label className="text-white">Your height</Form.Label>
                <Form.Control
                  className="rounded-pill"
                  name="height"
                  type="number"
                  min="1"
                  max="999"
                  value={state.height}
                  onChange={handleChange}
                  placeholder="175"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="d-flex justify-content-center mt-4">
            <Button
              class="btn btn-primary"
              variant="primary rounded-pill  px-4 py-2 ls-2"
              type="submit"
              disabled={state.weight === "" || state.height === ""}
              onClick={handleSubmit}
            >
              Calculate BMI
            </Button>
            <Link to={"/infobmi"}>
              <Button
                class="btn btn-info "
                variant="info rounded-pill mx-4 ls-2"
                type="submit"
              >
                What is BMI?
              </Button>
            </Link>
          </Row>
        </Form>
      </Container>
    </>
  );
};
BMIForm.propTypes = {
  change: PropTypes.func.isRequired
};
export default BMIForm;

{
  /* <h1>{weight}</h1>
<h1>{height}</h1> */
}

// const [cards, setCards] = useState([]);
// const [infos, setInfo] = useState([]);
// let weightInput = useRef();
// let heightInput = useRef();
// function handleInput(event) {
//   event.preventDefault();
//   let weight = weightInput.current.value;
//   let height = heightInput.current.value;
//   let bmi = CalculateBMI(weight, height);
//   // let bmi = 50;
//   const object = {
//     weight: weight,
//     height: height,
//     bmi: bmi
//   };
//   if (object.weight && object.height) {
//     setCards([...cards, object]);
//     setInfo([...infos, object]);
//   }
//   weightInput.current.value = "";
//   heightInput.current.value = "";
// }
// function deleteCard(index) {
//   cards.splice(index, 1);
//   setCards([...cards]);
// }
// function CalculateBMI(weight, height) {
//   let heightToMeter = height / 100;
//   let bmi = Number(weight / (heightToMeter * heightToMeter)).toFixed(2);
//   return bmi;
// }
