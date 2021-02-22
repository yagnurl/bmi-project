import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuidv4 } from "uuid";
import { getData, storeData } from "./local-storage/localStorage";
import BMIForm from "./components/home/BMIForm.jsx";
import InfoCard from "./components/home/InfoCard.jsx";
import LineChart from "./components/home/LineChart.jsx";
// import link from "./data/link.js";
// import SwipeableTemporaryDrawer from "./components/NavBar.jsx";

const Context = () => {
  const initialState = () => getData("data") || [];
  const [state, setState] = useState(initialState);
  const [data, setData] = useState({});

  useEffect(() => {
    storeData("data", state);
    const date = state.map((obj) => obj.date);
    const bmi = state.map((obj) => obj.bmi);
    let newData = { date, bmi };
    setData(newData);






  }, [state]);

  const handleChange = (val) => {
    let heightToMeter = val.height / 100;
    val.bmi = (val.weight / (heightToMeter * heightToMeter)).toFixed(2);

    val.id = uuidv4();
    let newVal = [...state, val];
    setState(newVal);
  };

  const handleDelete = (id) => {
    storeData("lastState", state);
    let newState = state.filter((item) => {
      return item.id !== id;
    });
    setState(newState);
  };

  return (
    <>
      <BMIForm change={handleChange} />;
      <LineChart labelData={data.date} bmiData={data.bmi} />
      <InfoCard infos={state} deleteCard={handleDelete} />
    </>
  );
};

export default Context;
