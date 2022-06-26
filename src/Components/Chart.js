import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import style from "../CSS/priceChart.module.css";

const Chart = () => {
  const data = {
    labels: [
      "Sunday",
      "February",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    datasets: [
      {
        label: "Price in EGY",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(189,145,47,0.4)",
        borderColor: "rgba(189,145,47,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(189,145,47,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(189,145,47,1)",
        pointHoverBorderColor: "rgba(189,145,47,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [911.3, 911.2, 912, 912.1, 910.5, 912.1, 912.5, 911.1, 912.5],
      },
    ],
  };
  return (
    <div className={style.chart_container}>
      <Line
        data={data}
        options={{
          maintainAspectRatio: false,
          scale: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
            xAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 222,
            },
          },
        }}
      />
    </div>
  );
};

export default Chart;
