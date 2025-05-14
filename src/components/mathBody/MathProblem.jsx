import { useState, useContext, useEffect } from "react";

import { MathContext } from "../../context/MathContext";

export default function MathProblem() {
  const {
    activeOperators,
    activeDifficulty,
    pickedNumbers,
    setPickedNumbers,
    pickedOperator,
    setPickedOperator,
    userSolution,
  } = useContext(MathContext);

  const settingBoundaries = () => {
    let minBoundary = null;
    let maxBoundary = null;
    if (Number(activeDifficulty) === 1) {
      minBoundary = 1;
      maxBoundary = 9;
    } else if (Number(activeDifficulty) === 2) {
      minBoundary = 0;
      maxBoundary = 99;
    } else {
      minBoundary = -999;
      maxBoundary = 999;
    }
    return [minBoundary, maxBoundary];
  };

  const returningOperator = () => {
    if (activeOperators.length === 1) {
      setPickedOperator(activeOperators[0]);
    } else if (activeOperators.length > 1) {
      setPickedOperator(
        activeOperators[Math.floor(Math.random() * activeOperators.length)]
      );
    }
  };

  const returningNumbers = () => {
    let boundaries = settingBoundaries();
    let firstNumber = Math.floor(
      Math.random() * (boundaries[1] - boundaries[0] + 1) + boundaries[0]
    );
    let secondNumber = Math.floor(
      Math.random() * (boundaries[1] - boundaries[0] + 1) + boundaries[0]
    );
    setPickedNumbers([firstNumber, secondNumber]);
    // return Math.floor(Math.random() * (max - min + 1) + min);
  };

  useEffect(() => {
    returningOperator();
    returningNumbers();
  }, [activeOperators, activeDifficulty]);

  useEffect(() => {
    typeof userSolution === "number" && returningOperator();
    typeof userSolution === "number" && returningNumbers();
  }, [userSolution]);

  return (
    <section className="problemContainer">
      {pickedOperator && pickedNumbers ? (
        <>
          {" "}
          <p>{pickedNumbers[0]}</p>
          <p>{pickedOperator}</p>
          <p>{pickedNumbers[1]}</p>
        </>
      ) : (
        <p>waiting</p>
      )}
    </section>
  );
}
