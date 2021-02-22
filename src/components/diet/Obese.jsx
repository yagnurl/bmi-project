import React, { useEffect, useState } from "react";
import { Container, Card } from "react-bootstrap";
import "../../style-diet.css";
import DietCard from "../diet/DietCard";
// import "../../styles.css";
function Obese() {
  const [data, setData] = useState([]);
  const [nutrients, setNutrients] = useState([]);

  const apiKey = `https://api.spoonacular.com/mealplanner/generate?apiKey=89430b222017455c9e23e402434025cf&targetCalories=1400&diet=omnivore&timeFrame=day`;

  let myHeaders = new Headers();
  myHeaders.append(
    "Cookie",
    "__cfduid=db7824fd541fb931b56d6c863d111d1c81613646123"
  );

  let requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  useEffect(() => {
    getData(apiKey);
  }, []);

  const getData = (API) => {
    fetch(API, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setData(result.meals);
        setNutrients(result.nutrients);
        console.log(nutrients);
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <Container className='text-darkblue'>
      <div className="text-center mt-2">
        <h1 className="fw-600 text-darkblue">MEAL OF THE DAY</h1>
        <br />
        <p className='fs-25 text-darkblue'>
          If your <b>BMI is more than, </b> we recommend you need
          <b> 1400</b> calories income per day.
        </p>
      </div>
      <br />
      <div className="row text-center justify-content-center">
        <div class="diet-circle ">
          <div class="diet-font text-transform-upper fs-18 d-flex flex-column text-lightgreen">
            Total Calories
            <span className="text-orange fs-35 fw-600">{nutrients.calories}</span>
          </div>

        </div>

        <div class="diet-circle ">
          <div class="diet-font text-transform-upper fs-18 d-flex flex-column text-lightgreen">
            Total protein
            <span className="text-orange fs-35 fw-600">{nutrients.protein}</span>
          </div>

        </div>
        <div class="diet-circle ">
          <div class="diet-font text-transform-upper fs-18 d-flex flex-column text-lightgreen">
            Total Fat
            <span className="text-orange fs-35 fw-600">{nutrients.fat}</span>
          </div>

        </div>
        <div class="diet-circle ">
          <div class="diet-font text-transform-upper fs-18 d-flex flex-column text-lightgreen">
            Total carbohydrates
            <span className="text-orange fs-35 fw-600">{nutrients.carbohydrates}</span>
          </div>

        </div>
      </div>
      <br />
      <br />

      {data.map((data) => (
        <DietCard {...data} nutrients={nutrients} key={data.id} />
      ))}

    </Container>
  );
}

export default Obese;
