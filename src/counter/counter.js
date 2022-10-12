import React, { useEffect, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { GrSubtractCircle } from "react-icons/gr";

const Counter = () => {
  const [second, setSecond] = useState(36000);

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
    timeIncrease(3600);
  };

  const decreaseHour = () => {
    timeDecrease(3600);
  };

  useEffect(() => {
    const timer = setInterval(function () {
      timeDecrease(1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [second]);
  const hour = Math.floor(second / 60 / 60);
  const min = Math.floor((second / 60) % 60);

  return (
    <div className="counter text-center">
      <div className="container grid coutdown">
        <div>
          <button
            className="coutdown-items"
            onClick={() => {
              increaseHour();
            }}
          >
            <AiOutlinePlusCircle />
          </button>
          <h1 style={{ color: "purple" }}>{hour}</h1>
          <button
            className="coutdown-items"
            onClick={() => {
              decreaseHour();
            }}
          >
            <GrSubtractCircle />
          </button>
        </div>
        <div>
          <button
            className="coutdown-items"
            onClick={() => {
              increaseMin();
            }}
          >
            <AiOutlinePlusCircle />
          </button>
          <h1 style={{ color: "purple" }}>{min}</h1>
          <button
            className="coutdown-items"
            onClick={() => {
              decreaseMin();
            }}
          >
            <GrSubtractCircle />
          </button>
        </div>
        <div>
          <button
            className="coutdown-items"
            onClick={() => {
              increaseSec();
            }}
          >
            <AiOutlinePlusCircle />
          </button>
          <h1 style={{ color: "purple" }}>{second % 60}</h1>
          <button
            className="coutdown-items"
            onClick={() => {
              decreaseSec();
            }}
          >
            <GrSubtractCircle />
          </button>
        </div>
      </div>
      <div class="container grid text-center">
        <span>Hours</span>
        <span>Minutes</span>
        <span>Seconds</span>
      </div>
    </div>
  );
};

export default Counter;
