import { useState, useContext } from "react";

import { MathContext } from "../../context/MathContext";

export default function MathSolution() {
  const { userSolution, setUserSolution } = useContext(MathContext);

  const [tempSolution, setTempSolution] = useState(null);

  const handlingSubmit = (e) => {
    e.preventDefault();
    setUserSolution(Number(tempSolution));
    setTempSolution(null);
  };

  return (
    <form className="solutionContainer" onSubmit={(e) => handlingSubmit(e)}>
      <input
        type="number"
        placeholder="="
        value={
          typeof tempSolution === "number"
            ? tempSolution
            : tempSolution
            ? tempSolution
            : ""
        }
        onChange={(e) => setTempSolution(e.target.value)}
      />
      <button
        className="submitButton"
        type="submit"
        onClick={(e) => handlingSubmit(e)}
      >
        ✔
      </button>
    </form>
  );
}
