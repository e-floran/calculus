import { useState, useContext } from "react";

import { MathContext } from "../../context/MathContext";

import MathButton from "./MathButton";

export default function Mathoperators() {
  const {
    activeOperators,
    setActiveOperators,
    activeDifficulty,
    setActiveDifficulty,
  } = useContext(MathContext);

  const handlingOperators = (operatorInput) => {
    let stockOperators = [...activeOperators];
    if (
      stockOperators.length > 0 &&
      stockOperators.some((operator) => {
        return operator === operatorInput;
      })
    ) {
      stockOperators = stockOperators.filter((operator) => {
        return operator !== operatorInput;
      });
      setActiveOperators(stockOperators);
    } else {
      stockOperators.push(operatorInput);
      setActiveOperators(stockOperators);
    }
  };

  const handlingOperatorButtonClass = (operatorInput) => {
    return activeOperators.some((operator) => {
      return operator === operatorInput;
    });
  };

  const handlingDifficultyButtonClass = (difficultyInput) => {
    return activeDifficulty === difficultyInput;
  };

  return (
    <section className="optionsContainer">
      <MathButton
        buttonParameter={"+"}
        buttonFunction={handlingOperators}
        activeButton={handlingOperatorButtonClass("+")}
      />
      {/* <button
        className={mathPlus ? "mathButton activeMathButton" : "mathButton"}
        onClick={() => {
          setMathPlus(!mathPlus);
        }}
      >
        {"+"}
      </button> */}
      <MathButton
        buttonParameter="−"
        buttonFunction={handlingOperators}
        activeButton={handlingOperatorButtonClass("−")}
      />
      <MathButton
        buttonParameter="×"
        buttonFunction={handlingOperators}
        activeButton={handlingOperatorButtonClass("×")}
      />
      {/* <MathButton
        buttonParameter="÷"
        buttonFunction={handlingOperators}
        activeButton={handlingOperatorButtonClass("÷")}
      /> */}
      <MathButton
        buttonParameter="1"
        buttonFunction={setActiveDifficulty}
        activeButton={handlingDifficultyButtonClass("1")}
      />
      <MathButton
        buttonParameter="2"
        buttonFunction={setActiveDifficulty}
        activeButton={handlingDifficultyButtonClass("2")}
      />
      <MathButton
        buttonParameter="3"
        buttonFunction={setActiveDifficulty}
        activeButton={handlingDifficultyButtonClass("3")}
      />
    </section>
  );
}
