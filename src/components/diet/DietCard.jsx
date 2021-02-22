import React, { useEffect } from "react";
import "../../styles.css";
// import { Row, Col, Carousel, Container } from "react-bootstrap";
// import { Link } from "react-router-dom";

import { Container } from "react-bootstrap";



function DietCard({
  id,
  title,
  imageType,
  readyInMinutes,
  servings,
  sourceUrl,
  calories,
  nutrients
}) {
  return (
    <Container>
      <div className=" card mb-3 g-0 border-15">
        <div className="row ">
          <div className="col-md-4">
            <img
              src={`https://spoonacular.com/recipeImages/${id}-${"240x150"}.${imageType} `}
              alt=""
              className="w-100 diet-img"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>

              <p className="card-text">
                Thisi is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-muted">
                  Ready in {readyInMinutes} minutes
                </small>
              </p>
              {/* <p className="card-text">
                  <small> {nutrients.calories} </small>
                  <small> {nutrients.fat} </small>
                  <small> {nutrients.carbohydrates} </small>
                  <small> {nutrients.protein} </small>
                </p> */}
              <a className='fw-600 text-orange text-transform-upper' target="_blank" href={sourceUrl}>
                To see recipe
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default DietCard;
