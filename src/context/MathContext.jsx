import { createContext, useState } from "react";

export const MathContext = createContext({});

export const MathProvider = ({ children }) => {
  const [activeOperators, setActiveOperators] = useState(["×"]);
  const [activeDifficulty, setActiveDifficulty] = useState("1");
  const [pickedNumbers, setPickedNumbers] = useState([]);
  const [pickedOperator, setPickedOperator] = useState(null);
  const [userSolution, setUserSolution] = useState(null);
  const [userStreak, setUserStreak] = useState(0);

  return (
    <MathContext.Provider
      value={{
        activeOperators,
        setActiveOperators,
        activeDifficulty,
        setActiveDifficulty,
        pickedNumbers,
        setPickedNumbers,
        pickedOperator,
        setPickedOperator,
        userSolution,
        setUserSolution,
        userStreak,
        setUserStreak,
      }}
    >
      {children}
    </MathContext.Provider>
  );
};
