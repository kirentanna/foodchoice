import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Roulette from "./Roulette";
import registerServiceWorker from "./registerServiceWorker";

const handleOnComplete = value => {
  console.log(value);
};

const options = [
  "pav bhaji",
  "idly sambhar",
  "chole roti",
  "black chana kadhi",
  "muri",
  "sev puri",
  "Pani puri",
  "roti daal sabji",
  "peas Pulao",
  "naan with paneer dal makhni",
  "puri and aloo subji",
  "taco",
  "roti wraps",
  "pasta nuddles",
  "burger sandwich",
  "soba nuddles",
  "dabeli",
  "lentil/veg soup",
  "brown rice daal sabji",
  "khichari",
  "ragi dosa",
  "uttapam",
  "missal pav",
  "palak paneer",
  "tamarind rice",
  "veg quesedilla",
  "pizza",
  "thai curry",
  "masaledaar aloo",
  "vada pav",
  "dahi wada"
];

ReactDOM.render(
  <Roulette options={options} baseSize={250} onComplete={handleOnComplete} />,
  document.getElementById("root")
);
registerServiceWorker();
