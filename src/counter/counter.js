import React from "react";
import { IoChevronForward } from "react-icons/io5";
import { IoChevronBackOutline } from "react-icons/io5";

const Counter = ({
  second,
  increaseSec,
  decreaseSec,
  increaseMin,
  decreaseMin,
  increaseHour,
  decreaseHour,
}) => {
  const hour = Math.floor(second / 60 / 60);
  const min = Math.floor((second / 60) % 60);

  return (
    <div>
      <h1>
        <button
          onClick={() => {
            increaseHour();
          }}
        >
          <IoChevronBackOutline />
        </button>
        <button
          onClick={() => {
            decreaseHour();
          }}
        >
          <IoChevronForward />
        </button>
        <button
          onClick={() => {
            increaseMin();
          }}
        >
          <IoChevronBackOutline />
        </button>
        <button
          onClick={() => {
            decreaseMin();
          }}
        >
          <IoChevronForward />
        </button>
        <button
          onClick={() => {
            increaseSec();
          }}
        >
          <IoChevronBackOutline />
        </button>
        {hour}h {min}m {second % 60}s
        <button
          onClick={() => {
            decreaseSec();
          }}
        >
          <IoChevronForward />
        </button>
      </h1>
    </div>
  );
};

export default Counter;
