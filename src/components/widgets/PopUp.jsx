import { useContext } from "react";

import { MathContext } from "../../context/MathContext";
import "../../styles/widgets.css";

export default function PopUp() {
  const { userStreak } = useContext(MathContext);

  return (
    <article className="feedbackContainer">
      <p>BRAVO</p>
    </article>
  );
}
