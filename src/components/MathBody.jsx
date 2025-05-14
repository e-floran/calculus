import { useState, useContext, useEffect } from "react";

import { MathContext } from "../context/MathContext";
import "../styles/mathBody.css";

import MathOptions from "./mathBody/MathOptions";
import MathProblem from "./mathBody/MathProblem";
import MathSolution from "./mathBody/MathSolution";
import CurrentStreak from "./widgets/CurrentStreak";
import BigPopUp from "./widgets/BigPopUp";
import PopUp from "./widgets/PopUp";

export default function MathBody() {
  const {
    pickedNumbers,
    userSolution,
    setUserSolution,
    userStreak,
    setUserStreak,
    pickedOperator,
  } = useContext(MathContext);
  const [showPopUp, setShowPopUp] = useState(false);

  const sortingOperator = () => {
    if (pickedOperator === "+") {
      return pickedNumbers[0] + pickedNumbers[1];
    } else if (pickedOperator === "×") {
      return pickedNumbers[0] * pickedNumbers[1];
    } else if (pickedOperator === "−") {
      return pickedNumbers[0] - pickedNumbers[1];
    } else if (pickedOperator === "÷") {
      return pickedNumbers[0] / pickedNumbers[1];
    }
  };

  const handlingResult = () => {
    console.log("handling result : ", userSolution);
    if (userSolution === sortingOperator()) {
      setUserStreak(userStreak + 1);
      setShowPopUp(true);
      setTimeout(() => {
        setShowPopUp(false);
      }, 1500);
    } else {
      setUserStreak(0);
    }
    setUserSolution(null);
  };

  useEffect(() => {
    typeof userSolution === "number" && handlingResult();
  }, [userSolution]);

  return (
    <div className="mathBodyContainer">
      <MathOptions />
      <MathProblem />
      <MathSolution />
      <CurrentStreak />
      {/* {showPopUp && <BigPopUp />} */}
      {showPopUp && <PopUp />}
    </div>
  );
}
