import { clear } from "@testing-library/user-event/dist/clear.js";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Counter from "./counter/counter.js";

const App = () => {
  const [data, setData] = useState({
    time: {
      updated: "Aug 19, 2022 22:25:00 UTC",
      updatedISO: "2022-08-19T22:25:00+00:00",
      updateduk: "Aug 19, 2022 at 23:25 BST",
    },
    disclaimer:
      "This data was produced from the CoinDesk Bitcoin Price Index (USD). Non-USD currency data converted using hourly conversion rate from openexchangerates.org",
    chartName: "Bitcoin",
    bpi: {
      USD: {
        code: "USD",
        symbol: "&#36;",
        rate: "21,165.8125",
        description: "United States Dollar",
        rate_float: 21165.8125,
      },
      GBP: {
        code: "GBP",
        symbol: "&pound;",
        rate: "17,685.9836",
        description: "British Pound Sterling",
        rate_float: 17685.9836,
      },
      EUR: {
        code: "EUR",
        symbol: "&euro;",
        rate: "20,618.5916",
        description: "Euro",
        rate_float: 20618.5916,
      },
    },
  });
  const [second, setSecond] = useState(36000);
  const getData = async () => {
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => response.json())
      .then((response) => {
        setData(response);
      });
  };

  const timeIncrease = (number) => {
    setSecond(second + 1 * number);
  };

  const timeDecrease = (number) => {
    setSecond(second - 1 * number);
  };

  const increaseSec = () => {
    timeIncrease(1);
  };

  const decreaseSec = () => {
    timeDecrease(1);
  };

  const increaseMin = () => {
    timeIncrease(60);
  };

  const decreaseMin = () => {
    timeDecrease(60);
  };

  const increaseHour = () => {
    timeIncrease(600);
  };

  const decreaseHour = () => {
    timeDecrease(60);
  };

  useEffect(() => {
    getData();
    const timer = setInterval(function () {
      timeDecrease(1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [second]);

  return (
    <div>
      <h1>{data.bpi.EUR.rate}</h1>
      <Counter
        second={second}
        increaseSec={increaseSec}
        decreaseSec={decreaseSec}
        increaseMin={increaseMin}
        decreaseMin={decreaseMin}
        increaseHour={increaseHour}
        decreaseHour={decreaseHour}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
