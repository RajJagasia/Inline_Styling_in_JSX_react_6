import React from "react";
import ReactDOM from "react-dom";

const customStyle1 = {
  color: "red",
  fontSize: "100px",
  border: "5px solid black"
};

ReactDOM.render(
  <h1 style={customStyle1}>Hello World!</h1>,
  document.getElementById("root")
);
