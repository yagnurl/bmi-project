import React from "react";
import { Line } from "react-chartjs-2";
import PropTypes from "prop-types";

const LineChart = ({ labelData, bmiData }) => {
  const data = (canvas) => {
    const ctx = canvas.getContext("2d");
    let gradient = ctx.createLinearGradient(63, 81, 181, 700);
    gradient.addColorStop(0, "#929dd9");
    gradient.addColorStop(1, "#172b4d");
    console.log(`bmiData: ${bmiData}`);
    return {
      labels: labelData,
      datasets: [
        {
          label: "Your BMI",
          // data: ["25"],
          data: bmiData,
          backgroundColor: gradient,

          borderColor: "#98acf8",
          pointRadius: 6,
          pointHoverRadius: 8,
          pointHoverBorderColor: "white",
          pointHoverBorderWidth: 2
        }
      ]
    };
  };
  const options = {
    responsive: true,
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Date",
            fontSize: 18,
            fontColor: "white"
          },
          gridLines: {
            display: false,
            color: "white"
          },

          ticks: {
            beginAtZero: false,
            fontColor: "black",
            fontSize: 6
          }
        }
      ],
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "BMI",
            fontSize: 20,
            fontColor: "#F2A154"
          },
          gridLines: {
            display: false,
            color: "white"
          },
          ticks: {
            fontColor: "white",
            fontSize: 16,
            beginAtZero: true
          }
        }
      ]
    },
    tooltips: {
      titleFontSize: 13,
      bodyFontSize: 13
    }
  };

  return (
    <div className="mt-5 container">
      <Line data={data} options={options} />
    </div>
  );
};

LineChart.propTypes = {
  labelData: PropTypes.array,
  bmiData: PropTypes.array
};

export default LineChart;
