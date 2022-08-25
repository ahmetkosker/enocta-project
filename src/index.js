import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import Counter from "./counter/counter";
import Prices from "./prices/prices";

const App = () => {
  return (
    <div>
      <div>
        <Counter />
      </div>
      <div>
        <Prices />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
