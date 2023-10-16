import React, { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("0");
  const [currentValue, setCurrentValue] = useState("");
  const [previousValue, setPreviousValue] = useState("");
  const [operator, setOperator] = useState("");

  const handleNumberClick = (number) => {
    setCurrentValue(currentValue + number);
  };

  const handleOperatorClick = (operator) => {
    if (currentValue !== "") {
      setPreviousValue(currentValue);
      setCurrentValue("");
      setOperator(operator);
    }
  };

  const handleEqualClick = () => {
    if (currentValue !== "" && previousValue !== "") {
      const result = calculateResult();
      setDisplay(result.toString());
      setCurrentValue(result.toString());
      setPreviousValue("");
      setOperator("");
    }
  };

  const calculateResult = () => {
    const num1 = parseFloat(previousValue);
    const num2 = parseFloat(currentValue);

    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num1 / num2;
      default:
        return 0;
    }
  };

  const handleClearClick = () => {
    setDisplay("0");
    setCurrentValue("");
    setPreviousValue("");
    setOperator("");
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">{display}</div>
        <div className="buttons">
          <div className="row">
            <button onClick={() => handleNumberClick("7")}>7</button>
            <button onClick={() => handleNumberClick("8")}>8</button>
            <button onClick={() => handleNumberClick("9")}>9</button>
            <button onClick={() => handleOperatorClick("+")}>+</button>
          </div>
          <div className="row">
            <button onClick={() => handleNumberClick("4")}>4</button>
            <button onClick={() => handleNumberClick("5")}>5</button>
            <button onClick={() => handleNumberClick("6")}>6</button>
            <button onClick={() => handleOperatorClick("-")}>-</button>
          </div>
          <div className="row">
            <button onClick={() => handleNumberClick("1")}>1</button>
            <button onClick={() => handleNumberClick("2")}>2</button>
            <button onClick={() => handleNumberClick("3")}>3</button>
            <button onClick={() => handleOperatorClick("*")}>*</button>
          </div>
          <div className="row">
            <button onClick={() => handleNumberClick("0")}>0</button>
            <button onClick={() => handleEqualClick()}>=</button>
            <button onClick={() => handleClearClick()}>C</button>
            <button onClick={() => handleOperatorClick("/")}>/</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;