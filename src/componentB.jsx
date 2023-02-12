import React, { useState } from "react";
import "./Style.css";

const ComponentB = (props) => {
  console.log(props.value);
  const [color, setColor] = useState("yellow");
  const [counter, setCounter] = useState(props.value);
  const [secondColor, setSecondColor] = useState(`aqua`);
  const [isTrue, setisTrue] = useState(true);
  const handleClick = () => {
    setCounter(counter + 10);
    setColor(secondColor);
  };
  const handleSecondClick = () => {
    setSecondColor(
      isTrue
        ? `#${Math.floor(Math.random() * 16777215)}`
        : `#${Math.floor(Math.random() * 16777215)}`
    );
    setisTrue(!isTrue);
  };

  return (
    <div>
      <div
        className="background"
        style={{
          backgroundColor: color,
        }}
      >
        <p className="counter"> {counter}</p>
        <span className="clickHere" onClick={handleClick}>
          Click to increment
        </span>
      </div>

      <button
        className="changeButton"
        onClick={handleSecondClick}
        style={{
          backgroundColor: secondColor,
        }}
      >
        Change Color
      </button>
    </div>
  );
};

export default ComponentB;
