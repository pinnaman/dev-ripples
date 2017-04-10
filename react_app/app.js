import React from "react";
import ReactDOM from "react-dom";
import Hello from "./hello";
import Welcome2 from "./welcome";


ReactDOM.render(
  <Hello name="World" />,
  document.body
);


const element = <Welcome2 name="AP" />;
ReactDOM.render(
  element,
  document.getElementById('container')
);
